import React from 'react';

const LeagueForm = () => {
    
    const addUser = (e) => {
      const leagueUsers = document.querySelector("#league-users");

        e.preventDefault();
        console.log(document.querySelector('#addUser').value)
        let addUserField = document.querySelector('#addUser').value
        const userLi = document.createElement('li');
        userLi.innerText = addUserField
        console.log(userLi)
        console.log(leagueUsers)
        leagueUsers.append(userLi)
        addUserField = "";
        console.log(leagueUsers)
    }

    
    return (
        <div id="form-container">
            <form id="league-form">
        <div>
          <label htmlFor="name">League Name:</label>
          <input type="text" name="name"  />
        </div>
        <div>
          <label htmlFor="addUser">Add Users:</label>
          <input type="text" id="addUser"/>
          <button onClick={addUser}>Add User</button>
        </div>
        <div id="addedUserList">
            <ul id="league-users">
        
        </ul>
        </div>
        <button data-testid="button" className='submit' type="submit">Create league</button>
            </form>
        </div>
    );
};

export default LeagueForm;