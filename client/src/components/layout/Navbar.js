import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { AppBar, Toolbar, Link, Typography, Button } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import style from './style';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = style();

  const authLinks = (
    <Fragment>
      <Button href='https://delicious-dash.herokuapp.com/' color='inherit'>
        Recipes
      </Button>
      <Button href='/dashboard' color='inherit'>
        {' '}
        <FontAwesomeIcon icon={faUser} />
        <span className='hide-sm'>Dashboard</span>
      </Button>
      <Button onClick={logout} color='inherit'>
        {' '}
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span className='hide-sm'>Logout</span>
      </Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button href='/register' color='inherit'>
        Register
      </Button>
      <Button href='/login' color='inherit'>
        Login
      </Button>
    </Fragment>
  );
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.toolbar}>
        <Toolbar>
          <Typography variant='h5' edge='start' className={classes.title}>
            <Link href='/' color='inherit'>
              Delicious
            </Link>
          </Typography>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
