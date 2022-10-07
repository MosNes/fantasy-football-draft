//Signup page
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LEAGUE } from '../utils/mutations';

import Auth from '../utils/auth';

//import signup mutation

const LeagueForm = () => {
    //set up state for league form
    const [formState, setFormState] = useState({
        name: ''
      });
      const [createLeague, { error }] = useMutation(CREATE_LEAGUE);
    
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
          const { data } = await createLeague({
            variables: { ...formState },
          });
    
          Auth.login(data.createLeague.token);
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
                    placeholder="League Name"
                    name="leagueName"
                    type="leagueName"
                    id="leagueName"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <button className="btn d-block w-100" type="submit">
                    Submit
                  </button>
                </form>
    
                {error && <div>League creation failed...</div>}
              </div>
            </div>
          </div>
          </div>
        </main>
      );
    };
    
    export default Signup;