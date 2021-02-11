export const addTeam = team => {
    return {
      type: 'ADD_TEAM',
      author
    };
  };
  
  export const removeTeam = id => {
    return {
      type: 'REMOVE_TEAM',
      id
    };
  };
  
  export const editTeam = id => {
    return {
      type: 'EDIT_TEAM',
      id
    };
  };

  export const addUser = user => {
    return {
      type: 'ADD_USER',
      book
    };
  };
  
  export const removeUser = id => {
    return {
      type: 'REMOVE_USER',
      id
    };
  };
  
  export const editUser = id => {
    return {
      type: 'EDIT_USER',
      id
    };
  };