import React from 'react'
import {Link} from 'react-router-dom'

const Team = ({props, action}) => {

  const handleClick = event => {
    event.preventDefault()
    console.log("In button click event")
    // action.addFavorite()
  }

    return (
      props ?
      <div>
        <div key={props.attributes.id}>
        <br></br>
          <h3>Ranking: {props.attributes.conference_rank}</h3>
          <img className="logo" src={props.attributes.logo_url} width={50} height={30}/>
          <h4>{props.attributes.name} ({props.attributes.wins} - {props.attributes.losses})</h4>
        <br></br>
        </div>
        <br></br>
      </div> :
      <p>This the the team card with no favorites!</p>
  )
}

export default Team