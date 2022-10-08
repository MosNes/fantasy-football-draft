//Signup page
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import './style.css'
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
      <main className="d-flex justify-content-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card bg-secondary">
          <h4 className="card-header text-white">Signup</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit} className='d-grid'>
            <input
                className="form-input"
                placeholder="First name"
                name="firstName"
                type="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
                <input
                className="form-input"
                placeholder="Last name"
                name="lastName"
                type="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
                <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100 btn-success" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
      
      );
    };
    
    export default Signup;