import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MaterialLink,
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import style from './style';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const classes = style();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            value={name}
            onChange={e => onChange(e)}
            label='Name'
            name='name'
            autoComplete='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='email'
            label='Email Account'
            type='email'
            id='email'
            value={email}
            onChange={e => onChange(e)}
            autoComplete='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            onChange={e => onChange(e)}
            autoComplete='password'
          />{' '}
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password2'
            label='Password Confirmation'
            type='password'
            id='password2'
            value={password2}
            onChange={e => onChange(e)}
            autoComplete='password2'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <MaterialLink href='#' variant='body2'>
                Forgot password?
              </MaterialLink>
            </Grid>
            <Grid item>
              <MaterialLink href='/login' variant='body2'>
                {'Login'}
              </MaterialLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <MaterialLink color='inherit' href='https://material-ui.com/'>
        Delicious
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

Register.propTypes = {
  setAlert: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
