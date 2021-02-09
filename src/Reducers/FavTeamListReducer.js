export default function FavTeamListReducer(
    state = {
      teams: []
    },
    action
  ) {
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {
          ...state,
          teams: state.teams.concat(state.teams.length + 1)
        }
   
      default:
        return state;
    }
  }