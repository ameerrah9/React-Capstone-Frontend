import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoritesCard from './FavoritesCard'

const Favorites = props => {
    const favoriteCards = props.teams && props.teams.length > 0 ?
    //     // props.teams.map(fav => (<p key={fav.id}><Link to={`/favorites/${fav.id}`}>{fav.attributes.name}</Link></p>)) :
    //     // null
    props.teams.map(fav => <FavoritesCard teams={fav} />) : null
    return favoriteCards
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Favorites)