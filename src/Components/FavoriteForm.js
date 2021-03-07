import React from 'react'
import { connect } from 'react-redux'
import { updateFavoriteForm } from '../actions/favoriteForm'

const FavoriteForm = ({ formData, updateFavoriteForm, userId, favorite, handleSubmit, deleteMode }) => {
    
    const { team } = formData

    return (
    <Form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
      <input name="team" value={team}/><br/>
      <input type="submit" value="Add to Favorite"/>

    </Form>
  )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.favoriteForm,
      userId
    }
  }

export default connect(mapStateToProps, { updateFavoriteForm })(FavoriteForm);
