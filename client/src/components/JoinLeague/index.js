import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { JOIN_LEAGUE} from '../utils/mutations';

import Auth from '../utils/auth';

//import signup mutation

const JoinLeague = () => {
    //set up state for league form
    const [formState, setFormState] = useState({
        join_code: '',
       
      });
      const [joinLeague, { error }] = useMutation(JOIN_LEAGUE);
    
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
          const { data } = await joinLeague({
            variables: { ...formState },
          });
    
          Auth.login(data.createTeam.token);
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
                    placeholder="Join Code"
                    name="joinCode"
                    type="joinCode"
                    id="joinCode"
                    value={formState.joinCode}
                    onChange={handleChange}
                  />
                  <button className="btn d-block w-100" type="submit">
                    Submit
                  </button>
                </form>
    
                {error && <div>League join failed....</div>}
              </div>
            </div>
          </div>
          </div>
        </main>
      );
    };
    
    export default JoinLeague;