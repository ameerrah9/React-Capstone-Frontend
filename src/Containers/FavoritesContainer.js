import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import favorites from '../reducers/favorites';
import Favorite from '../components/Favorties/FavoriteCard'

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
        <>
            <h3>FAVORITES TEAMS</h3>
            <h5>You can remove teams from your favorites, view the latest standings and rankings.</h5>
            <br></br>
            <div className="favlist">
                {this.props.favorites.map( fav =>
                    <Favorite 
                        fav={fav}
                        key={fav.id}
                    />)
                }
            </div>
        </>
    )
    }
}


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)
