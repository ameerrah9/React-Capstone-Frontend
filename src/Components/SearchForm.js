import React from 'react'
import { connect } from 'react-redux'
import { updateSearchForm } from "../actions/searchForm.js"
import { fetchTeamsFromSearch } from "../actions/searchTeams.js"
import { Form, Button, InputGroup } from 'react-bootstrap'

const SearchForm = ({ searchFormData, updateSearchForm, fetchTeamsFromSearch }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...searchFormData,
            [name]: value
        }
        updateSearchForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetchTeamsFromSearch(searchFormData)
    }
    
    return (
        <Form inline onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control 
                    value={searchFormData} 
                    placeholder="Search Teams" 
                    name="search" 
                    type="text" 
                    onChange={handleInputChange} />
                <Button variant="primary" type="submit">Search</Button>
            </InputGroup>
        </Form>
    )
}
const mapStateToProps = state => {
    return {
        searchFormData: state.searchForm.search
    }
}
export default connect(mapStateToProps, { updateSearchForm, fetchTeamsFromSearch } )(SearchForm)