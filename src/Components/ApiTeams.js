import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const apiTeams = ( props ) => {
    return (
      <div>

        {props.teams.map(team =>
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.city} {team.name} </Link>
          </li> )}
      </div>
  
    )
  }
  
export default apiTeams