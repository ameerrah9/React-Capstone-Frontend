import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import searchTeams from "../actions/searchTeams"

export class TeamInput extends Component {

    state = {
        input: ''
    }
    
      handleInputChange = event => {
        this.setState({
          input: event.target.value
        });
      }

      handleOnSubmit = event => {
        event.preventDefault();
        this.props.searchTeams(this.state);
        this.setState({
            input: ''
        })
      }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="search">Search</label>
                    <input 
                    type="text" 
                    value={this.state.input}
                    id="search"
                    onChange={(event) => this.handleInputChange(event)} 
                    placeholder="Lakers, Nets, Clippers" />
                    <input type="submit" value="search" />
                </form>
            </>
        )
    }
}

   
export default connect(null, {searchTeams})(TeamInput)
