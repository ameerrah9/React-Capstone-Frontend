export default (state = [], action) => {
  switch (action.type) {
          // case "ADD_USER":
          //   return { users: state.users.concat(action.payload.input) };

          // case "REMOVE_USER":
          //   idx = state.users.findIndex(user => user.id === action.id);
          //   return {
          //     ...state,
          //     teams: [...state.users.slice(0, idx), ...state.users.slice(idx + 1)]
          //   };
      
          default:
            return state;
  }
}