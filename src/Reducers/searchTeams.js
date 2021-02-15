export default (state = [], action) => {
  switch (action.type) {
      case 'SEARCH_TEAMS':
          return action.teams
      default:
          return state
  }
}