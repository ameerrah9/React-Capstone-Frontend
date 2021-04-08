import React from 'react'
import { Link } from 'react-router-dom'
import { createFavorite } from '../actions/favorites'
import { connect } from 'react-redux'

const Team = ( { sorted, teams, toggleButton, unToggleButton, createFavorite, currentUser } ) => {

  console.log(teams)
// debugger
  const handleClick = event => {
    event.preventDefault()
    createFavorite(teams.id, currentUser.id)
  }

  const sortedTeam = [...teams].sort(function(a, b) {
    return a.attributes.conference_rank - b.attributes.conference_rank;
  });

  return (
    <div>
    
      { sorted ? (<button onClick={unToggleButton}>UNSORT</button>) : (<button onClick={toggleButton}>SORT</button>)}

      { sorted ? (
        sortedTeam.map(team => 
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
        )) : (
        teams.map(team => 
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
        ))

      }
      </div>
    )
}


export default connect(null, { createFavorite })(Team)