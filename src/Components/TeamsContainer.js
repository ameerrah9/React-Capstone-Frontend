import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Team from './TeamCard'

const teamIteration = (props) => {
    return props.teams.map(team => <div key={team.id}><Team props={team} currentUser={props.currentUser} /></div>)
}

const Teams = props => {

    return (
        <>
        <h2 className="banner">Teams</h2>
        {teamIteration(props)}
        </>
    )

}

const mapStateToProps = state => {
    return {
        teams: state.teams,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Teams)