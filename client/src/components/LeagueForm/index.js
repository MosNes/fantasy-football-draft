import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LEAGUE } from '../../utils/mutations';
// import Auth from '../utils/auth';

    const LeagueForm = (props) => {
        //add state for login form
        const [formState, setFormState] = useState('');
        const [createLeague, { error }] = useMutation(CREATE_LEAGUE);
      
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
      
          // try {
          //   const { data } = await login({
          //     variables: { ...formState },
          //   });
      
          //   Auth.login(data.login.token);
          // } catch (e) {
          //   console.error(e);
          // }
      
          // clear form values
          setFormState('');
        };
      
    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card bg-secondary">
              <h4 className="card-header">Create League</h4>

              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="League name"
                    name="leagueName"
                    type="name"
                    id="name"
                    value={formState.name}

                    onChange={handleChange}
                  />
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </form>
    
                {error && <div>League creation failed...</div>}
              </div>
            </div>
          </div>
        </main>
    )

};

export default LeagueForm;
