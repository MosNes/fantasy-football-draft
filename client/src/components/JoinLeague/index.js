import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { JOIN_LEAGUE} from '../../utils/mutations';

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
            <div className="card bg-secondary text-white">
              <h4 className="card-header">Join League</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit} className='d-grid'>
                  <input
                    className="form-input"
                    placeholder="Join Code"
                    name="join_code"
                    type="joinCode"
                    id="joinCode"
                    value={formState.join_code}
                    onChange={handleChange}
                  />
                  <button className="btn d-block w-100 btn-success" type="submit">
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