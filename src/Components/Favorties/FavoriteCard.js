import React from 'react'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../../actions/favorites'
import { connect } from 'react-redux'


const Favorite = ( { fav, deleteFavorite } ) => {

  const handleClick = event => {
    event.preventDefault()
    deleteFavorite(fav.id)
  }


  return (
      <div key={fav.id}>
        <>
          <div className="team" key={fav.attributes.team.id}>

          <br></br>
            <h3>Ranking: {fav.attributes.team.conference_rank}</h3>
            <img className="logo" src={fav.attributes.team.logo_url} width={50} height={30}/>

            <h4>{fav.attributes.team.name} ({fav.attributes.team.wins} - {fav.attributes.team.losses})</h4>
            <button onClick={handleClick}>Remove Favorite</button>

          <br></br>
          </div>
          <br></br>
        </>
      </div>
  )
}

export default connect(null, { deleteFavorite })(Favorite)
