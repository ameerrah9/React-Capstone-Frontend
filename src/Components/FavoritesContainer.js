import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from './FavoriteCard'
import createFavorite, { deleteFavorite } from '../actions/favorites'

const Favorites = props => {
        return props.favorites.map(fav => <div key={fav.id}><Favorite props={fav} action={deleteFavorite} /></div>)

}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)