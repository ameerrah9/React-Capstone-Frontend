export default function Teams() {
    return (dispatch) => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then(accounts => dispatch({
          type: 'FETCH_TEAMS',
          payload: teams
        }))
      }
}