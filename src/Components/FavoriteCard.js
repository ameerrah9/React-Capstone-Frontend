import React from 'react'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../actions/favorites'
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

const Favorite = ({ props, deleteFavorite }) => {
  const handleClick = event => {
    event.preventDefault()
    deleteFavorite(props.id)
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

export default connect(null, { deleteFavorite })(Favorite)