//Login page component
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './style.css'

//add import for login mutation

    const Login = (props) => {
        //add state for login form
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error }] = useMutation(LOGIN_USER);
      
        //add change handler for login form
        const handleChange = (event) => {
          const { name, value } = event.target;
      
          setFormState({
            ...formState,
            [name]: value,
          });
        };
      
       
    //add submit handler for login form
        const handleFormSubmit = async (event) => {
          event.preventDefault();
      
          try {
            const { data } = await login({
              variables: { ...formState },
            });
      
            Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
      
          // clear form values
          setFormState({
            email: '',
            password: '',
          });
        };
      
    return (
        <main className="d-flex justify-content-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card bg-secondary">
              <h4 className="card-header text-white">Login</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit} className='d-grid'>
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
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <div className='d-grid'>
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                  </div>
                </form>
    
                {error && <div>Login failed</div>}
              </div>
            </div>
          </div>
        </main>
    )

};

export default Login;