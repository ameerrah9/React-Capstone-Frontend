import React from 'react';
import { connect } from 'react-redux';
import TeamCard from '../Components/Teams/TeamCard';

class Teams extends React.Component {
    render() {

        return (
            <>
                <h3>ALL TEAMS</h3>
                <h5>You can add teams to your favorites, view the latest standings and rankings.</h5>
                <br></br>
                    <div className='teamlist'>
                        {this.props.teams.map(team =>
                            <TeamCard
                                team={team}
                                key={team.id}
                                currentUser={this.props.currentUser}
                                />
                            )}
                    </div>
                </>
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
