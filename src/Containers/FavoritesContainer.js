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
            <div className="favlist">
                {this.props.favorites.map( fav =>
                    <Favorite 
                        fav={fav}
                        key={fav.id}
                    />)
                }
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
