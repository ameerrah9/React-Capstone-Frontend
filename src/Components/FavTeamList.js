import React, {Component} from 'react';

class Fav extends Component {
    render() {
        return (
            <div>
                <p>Your Favorite Teams:</p>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      increaseFav: () => dispatch({ type: 'INCREASE_COUNT' })
    };
  };
  
export default Fav;