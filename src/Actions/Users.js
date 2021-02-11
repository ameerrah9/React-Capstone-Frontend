export default function Users() {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(accounts => dispatch({
          type: 'FETCH_USERS',
          payload: users
        }))
      }
}