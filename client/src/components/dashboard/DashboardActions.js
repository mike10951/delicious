import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
  return (
    <Fragment>
      <div className='dash-buttons'>
        <Link to='/edit-profile' className='btn btn-light'>
          <FontAwesomeIcon icon={faUserCircle} className='text-primary' /> Edit
          profile
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardActions;
