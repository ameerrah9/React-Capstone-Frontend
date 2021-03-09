import React from 'react'
import {Link} from 'react-router-dom'
import deleteFavorite from '../actions/favorites'

const Favorite = ({props}) => {

  const handleClick = event => {
    event.preventDefault()
    console.log("In button click event")
    deleteFavorite()
  }

  return (
      props ?
      <div>
        <div key={props.attributes.team.id}>
        <br></br>
          <h3>Ranking: {props.attributes.team.conference_rank}</h3>
          <img className="logo" src={props.attributes.team.logo_url} width={50} height={30}/>
          <h4>{props.attributes.team.name} ({props.attributes.team.wins} - {props.attributes.team.losses})</h4>
          <button onClick={handleClick}>Remove Favorite</button>
        <br></br>
        </div>
        <br></br>
      </div> :
      <p>This the the team card with no teams!</p>
  )
}

export default Favorite