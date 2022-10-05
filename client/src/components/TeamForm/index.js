import React from 'react';

const TeamForm = () => {
    
    const addPlayer = (e) => {
      const TeamPlayers = document.querySelector("#Team-Players");

        e.preventDefault();
        console.log(document.querySelector('#addPlayer').value)
        let addPlayerField = document.querySelector('#addPlayer').value
        const PlayerLi = document.createElement('li');
        PlayerLi.innerText = addPlayerField
        console.log(PlayerLi)
        console.log(TeamPlayers)
        TeamPlayers.append(PlayerLi)
        addPlayerField = "";
        console.log(TeamPlayers)
    }

    
    return (
        <div id="form-container">
            <form id="Team-form">
        <div>
          <label htmlFor="name">Team Name:</label>
          <input type="text" name="name"  />
        </div>
        <div>
          <label htmlFor="addPlayer">Add Players:</label>
          <input type="text" id="addPlayer"/>
          <button onClick={addPlayer}>Add Player</button>
        </div>
        <div id="addedPlayerList">
            <ul id="Team-Players">
        
        </ul>
        </div>
        <button data-testid="button" className='submit' type="submit">Create Team</button>
            </form>
        </div>
    );
};

export default TeamForm;