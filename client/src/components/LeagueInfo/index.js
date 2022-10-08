import React from "react";
import { Alert } from "react-bootstrap";

const LeagueInfo = ({ leagueData, userId }) => {

    console.log("active user: ", leagueData.active_user)
    return (
        <div>
            <h3>{leagueData.name}</h3>
            <h5 className="">Join Code: {leagueData.join_code}</h5>
            {!leagueData.active_user ? 
            (
            <Alert variant='secondary' className="text-center mt-4">
                The Draft has not started yet.
            </Alert>
            ) : leagueData.active_user._id === userId ? (
                <Alert variant='success' className="text-center mt-4">
                    It's your pick!
                </Alert>
            ) :(
                <Alert variant='warning' className="text-center mt-4">
                    It's {leagueData.active_user.username}'s turn to pick!
                </Alert>
            )}
            
        </div>
    )
};

export default LeagueInfo;