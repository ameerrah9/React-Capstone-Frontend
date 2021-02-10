import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class SearchForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Search</h1>
                    <div>
                        <input type="text" name="search" placeholder="Lakers, Nets, Clippers" />
                        <label htmlFor="search">Search</label>
                    </div>

                </form>
            </>
        )
    }
}

export default connect(

    mapDispatchToProps
  )(SearchForm);