import React from 'react'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../actions/favorites'
import { connect } from 'react-redux'


const Favorite = ( { sorted, toggleButton, unToggleButton, favorites, deleteFavorite } ) => {

  console.log(favorites)
  const handleClick = event => {
    event.preventDefault()
    deleteFavorite(favorites.id)
  }
  
  
  const sortedFav = [...favorites].sort(function(a, b) {
    return a.attributes.team.conference_rank - b.attributes.team.conference_rank;
  });
  
  return (
    <div>
    
      { sorted ? (<button onClick={unToggleButton}>UNSORT</button>) : (<button onClick={toggleButton}>SORT</button>)}

      { sorted ? (
        sortedFav.map(fav => 
          <div key={fav.id}>
            <div>
              <div key={fav.attributes.team.id}>

              <br></br>
                <h3>Ranking: {fav.attributes.team.conference_rank}</h3>
                <img className="logo" src={fav.attributes.team.logo_url} width={50} height={30}/>

                <h4>{fav.attributes.team.name} ({fav.attributes.team.wins} - {fav.attributes.team.losses})</h4>
                <button onClick={handleClick}>Remove Favorite</button>

              <br></br>
              </div>
              <br></br>
            </div>
          </div>
        )) : (
        favorites.map(fav => 
          <div key={fav.id}>
            <div>
              <div key={fav.attributes.team.id}>

              <br></br>
                <h3>Ranking: {fav.attributes.team.conference_rank}</h3>
                <img className="logo" src={fav.attributes.team.logo_url} width={50} height={30}/>

                <h4>{fav.attributes.team.name} ({fav.attributes.team.wins} - {fav.attributes.team.losses})</h4>
                <button onClick={handleClick}>Remove Favorite</button>

              <br></br>
              </div>
              <br></br>
            </div>
          </div>
        ))

      }
      </div>
    )
}

export default connect(null, { deleteFavorite })(Favorite)