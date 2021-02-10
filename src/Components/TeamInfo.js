import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({
    City,
    Name,
    Conference,
    Losses,
    Wins,
    Percentage,
    TeamID
}) => {
  return (
    
    <div
      key={TeamID}
      className="team"
    >
        <>
        <h6>{City} </h6>
        </>
      <>
      <h3>{Name} </h3>
      </>
      <>
      ({Wins} - {Losses})
      </>
      <button>Add Team To Favorites</button>

    </div>
  );
};

const Teams = ({ teams }) => {
  const renderTeams = Object.keys(teams).map(TeamID =>
    <Link key={TeamID} to={`/teams/${TeamID}`}>{teams[TeamID].Name}</Link>
  );
 
  return (
    <div>
      {renderTeams}
    </div>
  );
}

//<div className="team-list">{teams.map(Team)}</div>;

Teams.defaultProps = {
  teams: []
};

export default Teams;