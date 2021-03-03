import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Favorites = props => {
    const favoriteCards = props.favorites && props.favorites.length > 0 ?
        props.favorites.map(fav => (<p key={fav.id}><Link to={`/favorites/${fav.id}`}>{fav.attributes.name}</Link></p>)) :
        null
        
    return favoriteCards
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)