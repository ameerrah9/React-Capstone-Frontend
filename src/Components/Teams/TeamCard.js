import React from 'react'
import { Link } from 'react-router-dom'
import { createFavorite } from '../../actions/favorites'
import { connect } from 'react-redux'

const TeamCard = ( { team, createFavorite, currentUser } ) => {

  const handleClick = event => {
    event.preventDefault()
    console.log(team.id)
    createFavorite(team.id, currentUser.id)
  }

  return (
    <div>
      <div key={team.id}>
        <div>
          <div key={team.attributes.id}>

          <br></br>
            <h3>Ranking: {team.attributes.conference_rank}</h3>
            <img className="logo" src={team.attributes.logo_url} width={50} height={30}/>

            <h4>{team.attributes.name} ({team.attributes.wins} - {team.attributes.losses})</h4>
            <button onClick={handleClick}>Add Favorite</button>
          <br></br>
          </div>
          <br></br>
        </div>
      </div>

    </div>
    )
}


export default connect(null, { createFavorite })(TeamCard)