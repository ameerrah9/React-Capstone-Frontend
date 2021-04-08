import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Team from './TeamCard'

class Teams extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sorted: false
        }
    }

    toggleButton = () => {
        this.setState({
          sorted: true
        })

    }
    unToggleButton = () => {
        this.setState({
            sorted: false
          })
    }

    render() {
        return (
            <div>
                {this.props.teams.length > 0 ? (
                    <Team   
                        teams={this.props.teams} 
                        currentUser={this.props.currentUser} 
                        sorted={this.state.sorted} 
                        unToggleButton={this.unToggleButton} 
                        toggleButton={this.toggleButton} 

                        />) : 
                    
                    ("Loading favorites")
                }
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
