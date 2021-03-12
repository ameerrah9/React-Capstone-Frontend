import React from 'react'
import {Link} from 'react-router-dom'
import { createFavorite } from '../actions/favorites'
import { connect } from 'react-redux'
import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Button,
  FormControl
} from '@material-ui/core';

const Team = ({ props, createFavorite, currentUser }) => {

// debugger
  const handleClick = event => {
    event.preventDefault()
    createFavorite(props.id, currentUser.id)
  }

    return (
      props ?
      <div>
        <div key={props.attributes.id}>
        <br></br>
          <h3>Ranking: {props.attributes.conference_rank}</h3>
          <img className="logo" src={props.attributes.logo_url} width={50} height={30}/>
          <h4>{props.attributes.name} ({props.attributes.wins} - {props.attributes.losses})</h4>
          <button onClick={handleClick}>Add to Favorites</button>

        <br></br>
        </div>
        <br></br>
      </div> :
      <p>This the the team card with no favorites!</p>
  )
}


export default connect(null, { createFavorite })(Team)