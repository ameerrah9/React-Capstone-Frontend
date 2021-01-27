import React from 'react';

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
      key={Name}
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

    </div>
  );
};

const Teams = ({ teams }) => <div className="team-list">{teams.map(Team)}</div>;

Teams.defaultProps = {
  teams: []
};

export default Teams;