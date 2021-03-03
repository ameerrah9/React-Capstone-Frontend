import React from 'react'
import {Link} from 'react-router-dom'

const FavoriteCard = ({ favorites }) => {
    const logo = favorites.attributes.team.logo_url
  return (
      favorites ?
      <div>
      <h3>Ranking: {favorites.attributes.team.conference_rank}</h3>
      <img className="logo" src={logo} width={50} height={30}/>
        <h3>{favorites.attributes.team.name} ({favorites.attributes.team.wins} - {favorites.attributes.team.losses})</h3>
        <button>Remove Favorite</button>
        {/* <Link to={`/favorite/${team.id}/edit`}>Edit this team</Link> */}
      </div> :
      <p>This the the team card with no favorites!</p>
  )
}

export default FavoriteCard