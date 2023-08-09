// sync actions

export const updateFavoriteForm = (name, value) => {
    const formData = { name, value }
    return {
      type: 'UPDATE_NEW_FAVORITE_FORM',
      formData
    }
  }
  
  export const resetFavoriteForm = () => {
    return {
      type: 'RESET_NEW_FAVORITE_FORM',
    }
  }
