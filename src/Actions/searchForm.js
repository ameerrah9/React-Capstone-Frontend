export const updateSearchForm = (name, value) => {
    const searchFormData = { name, value }
    return {
      type: "UPDATE_SEARCH_FORM",
      searchFormData
    }
  }
  
  export const resetSearchForm = () => {
    return {
      type: "RESET_SEARCH_FORM",
    }
  }
  