import React from 'react';
import { createFavorite } from '../../Actions/favorites';
import { connect } from 'react-redux';

const TeamCard = ( { team, createFavorite, currentUser } ) => {

  const handleClick = event => {
    event.preventDefault()
    createFavorite(team.id, currentUser.id)
  }

  return (
      <div key={team.id}>
        <div>
          <div className='team' key={team.attributes.id}>

          <br></br>
            <h3>Ranking: {team.attributes.conference_rank}</h3>
            <img alt='' className='logo' src={team.attributes.logo_url} width={50} height={30}/>

            <h4>{team.attributes.name} ({team.attributes.wins} - {team.attributes.losses})</h4>
            <button onClick={handleClick}>Add Favorite</button>
          <br></br>
          </div>
          <br></br>
        </div>
    </div>
    )
}


export default connect(null, { createFavorite })(TeamCard)
