import React, { Component } from "react";
import TeamInfo from './TeamInfo'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchTeams } from "./Actions/fetchTeams"

const NBA_URL='https://api.sportsdata.io/v3/nba/scores/json/Standings/{2021}'
const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'
const requestHeaders = {
    headers: {
      'Ocp-Apim-Subscription-Key': NBA_API_KEY,
    },
};

class TeamContainer extends Component {
  // constructor for
  // constructor() {
  //   // allows you to
  //   super();

  //   // Define the initial state:
  //   this.state = {
  //     // ...set state
  //       teams: []
  //   };
  // }

  componentDidMount() {
    const teams = {}
    this.props.fetchTeams(teams)
    // fetch(NBA_URL, requestHeaders)
    //   .then(res => res.json())
    //   //.then(resp => console.log(resp));

    //   .then(resp => this.setState({ teams: resp }));
  }

  // any method
  // method template => arrow func:
  handleClick = () => {
    // Update our state here...
  };

  render() {
    return (
      <>
        <Switch>
          <h2 >The Latest Teams:</h2>

          <Route exact path="/teams" component={TeamInfo} >
            <TeamInfo teams={this.state.teams} />
          </Route>

          <Route exact path="/teams/favorites" component={TeamInfo} >
            <TeamInfo teams={this.state.teams} />
          </Route>

          <Route exact path="/teams/:id" component={TeamInfo} >
            <TeamInfo teams={this.state.teams} />
          </Route>

        </Switch>
      </>
    );
  }
  
}
const mapStateToProps = (state) => {
  return { teams: state.teams };
};
 
const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: (teams) => dispatch({ type: 'FETCH_TEAMS', payload: teams })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TeamContainer);