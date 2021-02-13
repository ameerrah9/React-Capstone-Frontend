const initialState = {
    firstname: "",
    lastname: "",
    location: "",
    username: "",
    email: "",
    img_src: "",
    password: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState    
        default:
            return state;
    }
}