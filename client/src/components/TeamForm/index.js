import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEAM } from '../../utils/mutations';

//import signup mutation

const TeamForm = ({leagueId}) => {
    //set up state for league form
    const [formState, setFormState] = useState({
        name: '',
        leagueId: leagueId
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

          console.log(data);
          document.location.reload();
    
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <main className='container justify-content-center'>
        <div className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card bg-secondary">
              <h4 className="card-header">Create Team</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit} className='d-grid'>
                  <input
                    className="form-input"
                    placeholder="Team Name"
                    name="name"
                    type="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <button className="btn btn-success" type="submit">
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