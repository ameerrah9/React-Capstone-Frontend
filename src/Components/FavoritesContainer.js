import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from './FavoriteCard'
import createFavorite, { deleteFavorite, sortTeams } from '../actions/favorites'

class Favorites extends React.Component {

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
                {this.props.favorites.length > 0 ? (<Favorite unToggleButton={this.unToggleButton} toggleButton={this.toggleButton} sorted={this.state.sorted} favorites={this.props.favorites} />) : ("Loading favorites")}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)