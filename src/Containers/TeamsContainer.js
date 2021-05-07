import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TeamCard from '../components/Teams/TeamCard'

class Teams extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (

                <div className="teamlist">
                    {this.props.teams.map(team =>
                        <TeamCard 
                            team={team} 
                            key={team.id}                     
                            currentUser={this.props.currentUser}
                            />
                        )}
                </div>
        ) 
    }
}

    const mapStateToProps = state => {
        return {
            teams: state.teams,
            currentUser: state.currentUser
        }
    }

export default connect(mapStateToProps)(Teams)
