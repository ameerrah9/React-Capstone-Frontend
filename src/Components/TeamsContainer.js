import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TeamsCard from './TeamsCard'

const Teams = props => {
    const teamCards = props.teams && props.teams.length > 0 ?
        // props.teams.map(fav => (<p key={team.id}><Link to={`/teams/${team.id}`}>{team.attributes.name}</Link></p>)) :
        // null
    props.teams.map(team => <TeamsCard teams={team} />) : null
    return teamCards
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Teams)