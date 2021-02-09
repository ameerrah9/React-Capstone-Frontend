import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

export default class SearchForm extends Component {
    render() {
        return (
            <>
                <form>
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
