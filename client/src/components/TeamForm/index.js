import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEAM } from '../utils/mutations';

import Auth from '../utils/auth';

//import signup mutation

const TeamForm = () => {
    //set up state for league form
    const [formState, setFormState] = useState({
        name: '',
        league_Id: ''
      });
      const [createTeam, { error }] = useMutation(CREATE_TEAM);
    
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
          const { data } = await createTeam({
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
                    placeholder="Team Name"
                    name="teamName"
                    type="teamName"
                    id="teamName"
                    value={formState.name}
                    onChange={handleChange}
                  />
                   <input
                    className="form-input"
                    placeholder="League ID"
                    name="leagueId"
                    type="leagueId"
                    id="leagueId"
                    value={formState.league_Id}
                    onChange={handleChange}
                  />
                  <button className="btn d-block w-100" type="submit">
                    Submit
                  </button>
                </form>
    
                {error && <div>Team creation failed...</div>}
              </div>
            </div>
          </div>
          </div>
        </main>
      );
    };
    
    export default TeamForm;