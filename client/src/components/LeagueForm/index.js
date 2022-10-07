//Login page component
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LEAGUE } from '../../utils/mutations';
// import Auth from '../utils/auth';

//add import for login mutation

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
            <div className="card">
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
                  <button className="btn d-block w-100" type="submit">
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





















































//Login page component
// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { CREATE_LEAGUE } from '../utils/mutations';
// import Auth from '../utils/auth';

//add import for login mutation

    // const LeagueForm = () => {
        // //add state for login form
        // const [name, setName] = useState('');
        // const [characterCount, setCharacterCount] = useState(0);
        // const [createLeague, { error }] = useMutation(CREATE_LEAGUE);

   // update state based on form input changes
  //  const handleChange = (event) => {
  //   if (event.target.value.length <= 280) {
  //     setBody(event.target.value);
  //     setCharacterCount(event.target.value.length);
  //   }
  // };
// // submit form
// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     await createLeague({
//       variables: { reactionBody, thoughtId },
//     });

//     // clear form value
//     setBody('');
//     setCharacterCount(0);
//   } catch (e) {
//     console.error(e);
//   }
// };
      
       
//     //add submit handler for login form
//         const handleFormSubmit = async (event) => {
//           event.preventDefault();
      
//           try {
//             const { data } = await login({
//               variables: { ...formState },
//             });
      
//             Auth.login(data.login.token);
//           } catch (e) {
//             console.error(e);
//           }
      
//           // clear form values
//           setFormState({
//             email: '',
//             password: '',
//           });
//         };

// return (
//   <div>
//     <p
//       className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
//     >
//       Character Count: {characterCount}/280
//       {error && <span className="ml-2">Something went wrong...</span>}
//     </p>
//     <form
//       className="flex-row justify-center justify-space-between-md align-stretch"
//       onSubmit={handleFormSubmit}
//     >
//       <textarea
//         placeholder="League name"
//         value={reactionBody}
//         className="form-input col-12 col-md-9"
//         onChange={handleChange}
//       ></textarea>

//       <button className="btn col-12 col-md-3" type="submit">
//         Submit
//       </button>
//     </form>

//     {error && <div>Something went wrong...</div>}
//   </div>
// );

//  export default LeagueForm;
// export default Login;