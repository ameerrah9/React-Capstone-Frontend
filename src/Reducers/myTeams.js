export default (state = [], action) => {
    switch (action.type) {
   
      // case 'START_ADDING_TEAMS_REQUEST':
      //   return {
      //     ...state,
      //     teams: [...state.teams]
      //         }
   
      // case 'ADD_TEAMS':
      //   return {
      //     ...state,
      //     teams: action.teams
      //   }
   
      default:
        return state;
    }
  };