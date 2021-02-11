import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Team from "./Team"
  
  const Teams = (props) => {
  debugger
    return (
      <div>
        {props.teams.map(team =>
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.city} {team.name} </Link>
          </li> )}
      </div>
  
    )
  }
  
  export default Teams