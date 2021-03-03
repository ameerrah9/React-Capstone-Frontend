const initialState = {
    user_id: "",
    team_id: ""
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_FAVORITE_FORM":
        const returnVal = {
          ...state,
          [action.formData.name]: action.formData.value
        }
        return returnVal
      case "RESET_NEW_FAVORITE_FORM":
        return initialState
      default:
        return state
    }
  }