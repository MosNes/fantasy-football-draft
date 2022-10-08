import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LEAGUE } from '../../utils/mutations';
// import Auth from '../utils/auth';

    const LeagueForm = ( {userId} ) => {
        //add state for login form
        const [formState, setFormState] = useState({name: ''});
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

          console.log('Form State', formState)
      
          try {
            const { data } = await createLeague({
              variables: { ...formState },
            });
      
            console.log(data);

          } catch (e) {
            console.error(e);
          }
      
          // clear form values
          setFormState('');
          document.location.reload();
        };
      
    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card bg-secondary text-white">
              <h4 className="card-header">Create League</h4>

              <div className="card-body">
                <form onSubmit={handleFormSubmit} className='d-grid'>
                  <input
                    className="form-input"
                    placeholder="League name"
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
    
                {error && <div>League creation failed...</div>}
              </div>
            </div>
          </div>
        </main>
    )

};

export default LeagueForm;
