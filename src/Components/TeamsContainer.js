import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Team from './TeamCard'
import createFavorite, { addFavorite } from '../actions/favorites'

const Teams = props => {

    return props.teams.map(team => <div key={team.id}><Team props={team} action={addFavorite} /></div>)

}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Teams)