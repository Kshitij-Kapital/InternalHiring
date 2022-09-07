import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Google = ({ informParent = f => f }) => {
    return (
        <div className="pb-3">
            <GoogleOAuthProvider
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
            >
                <GoogleLogin
                    buttonText='Login'
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        axios({
                            method: 'POST',
                            url: `${process.env.REACT_APP_API}/google-login`,
                            data: { idToken: credentialResponse.credential }
                        })
                            .then(response => {
                                console.log('GOOGLE SIGNIN SUCCESS', response);
                                // inform parent component
                                informParent(response);
                            })
                            .catch(error => {
                                console.log('GOOGLE SIGNIN ERROR', error.response);
                            });
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Google;