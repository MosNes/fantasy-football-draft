//Signup page
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

//import signup mutation

const Signup = () => {
    //set up state for signup form
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      });
      const [addUser, { error }] = useMutation(ADD_USER);
    
      //add change handlers for signup form state
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      //add submit handler for signup form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <main className='container justify-content-center'>
        <div className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card">
              <h4 className="card-header">Sign Up</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                   <input
                    className="form-input"
                    placeholder="Your first name"
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                    <input
                    className="form-input"
                    placeholder="Your last name"
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="password"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button className="btn d-block w-100" type="submit">
                    Submit
                  </button>
                </form>
    
                {error && <div>Signup failed</div>}
              </div>
            </div>
          </div>
          </div>
        </main>
      );
    };
    
    export default Signup;