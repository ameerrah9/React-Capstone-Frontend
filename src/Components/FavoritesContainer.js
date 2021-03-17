import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from './FavoriteCard'
import createFavorite, { deleteFavorite } from '../actions/favorites'
import { setCurrentUser } from '../actions/currentUser'

const favoriteIteration = props => {
    return props.favorites.map(fav => <div key={fav.id}><Favorite props={fav} action={deleteFavorite} /></div>)

}

const Favorites = props => {
    return (
        <>
        <h2 className="banner">Your Favorites</h2>
        {favoriteIteration(props)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Favorites)