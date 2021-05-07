import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import fetchTeams from "../actions/fetchTeams"
import NavBar from "../components/NavBar"
import TeamInput from '../components/TeamInput'
import Teams from "../components/Teams"
import Team from "../components/Team"

class TeamsContainer extends Component {

  componentDidMount() {
    this.props.fetchTeams()
  }

  render() {
    return (
      <>
        <NavBar/>
        <Switch>
          <h2 >The Latest Teams:</h2>
        
          <Route exact path='/teams/new' component={TeamInput} />

          <Route path='/teams/:id' render={(routerProps) => <Team {...routerProps} teams={this.props.teams}/>}/>

          <Route path='/teams' render={(routerProps) => <Teams {...routerProps} teams={this.props.teams}/>}/>

        </Switch>
      </>
    );
  }
  
}
function mapStateToProps(state){
  return { teams: state.teams };
};

export default connect(mapStateToProps, {fetchTeams})(TeamsContainer)
