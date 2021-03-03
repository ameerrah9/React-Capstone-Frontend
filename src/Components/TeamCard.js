import React from 'react'
import {Link} from 'react-router-dom'

const TeamCard = ({ teams }) => {
    const logo = teams.attributes.team.logo_url
  return (
      teams ?
      <div>
      <h3>{teams.attributes.team.conference_rank}</h3>
      <img className="logo" src={logo} width={50} height={30}/>
        <h3>{teams.attributes.team.name} ({teams.attributes.team.wins} - {teams.attributes.team.losses})</h3>
        {/* <Link to={`/teams/${team.id}/edit`}>Edit this team</Link> */}
      </div> :
      <p>This the the team card with no team!</p>
  )
}

export default TeamCard