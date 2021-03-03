import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Favorites = props => {
    // const favoriteCards = props.favorites && props.favorites.length > 0 ?
    //     props.favorites.map(fav => (<p key={fav.id}>{fav.attributes.name}</p>)) :
    //     null

    // return favoriteCards
    return (
    <div>
      {props.favorites.map(favorite =>
        <div key={favorite.id}>
            <h3>Ranking: {favorite.attributes.team.conference_rank}</h3>
            <img className="logo" src={favorite.attributes.team.logo_url} width={50} height={30}/>
            <h4>{favorite.attributes.team.name} ({favorite.attributes.team.wins} - {favorite.attributes.team.losses})</h4>
            <button>Remove Favorite</button>
        </div>)}
    </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)