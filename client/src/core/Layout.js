import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../auth/helpers';
import Header from '../components/Header';

const Layout = ({ children, match, history }) => {
    const isActive = path => {
        if (match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };


    const nav = () => (
        <ul className="nav nav-tabs bg-light">
            <li className="nav-item">
                <Link to="/" className="nav-link text-dark" style={isActive('/')}>
                    Home
                </Link>
            </li>

            {!isAuth() && (
                <Fragment>
                    <li className="navbar-nav ml-auto mr-3">
                        <Link to="/signin" className="nav-link text-dark" style={isActive('/signin')}>
                            Signin
                        </Link>
                    </li>
                    <li className="navbar-nav mr-3">
                        <Link to="/signup" className="nav-link text-dark" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
                <li className="navbar-nav ml-auto mr-3 text-dark">
                <Header />
                    <Link className="nav-link text-dark" style={isActive('/admin')} to="/admin">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role === 'employer' && (
                <li className="navbar-nav ml-auto mr-3 text-dark">
                    <Link className="nav-link text-dark" style={isActive('/employer')} to="/employer">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role === 'candidate' && (
                <li className="navbar-nav ml-auto mr-3 text-dark">
                    <Link className="nav-link text-dark" style={isActive('/private')} to="/private">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && (
                <li className="navbar-nav mr-3">
                    <span className="nav-link" style={{ cursor: 'pointer', color: '#000' }} onClick={() => {
                        signout(() => {
                            history.push('/')
                        })
                    }}>
                        Signout
                    </span>
                </li>
            )}
        </ul>
    );

    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withRouter(Layout);
