import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import PlacesAutocomplete from 'react-places-autocomplete';



const initialState = { isLoading: false, results: [], value: '' }


class SearchBar extends React.Component {
    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })
  
      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState(initialState)
  
        // const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        // const isMatch = result => re.test(result.title)
  
        // this.setState({
        //   isLoading: false,
        //   results: _.filter(source, isMatch),
        // })
      }, 300)
    }
  
    render() {
      const { isLoading, value, results } = this.state
  
      return (
        <Grid>
          <Grid.Column width={6}>
            <Search
              id='Search_term' 
              placeholder='Your current city'
              input={{ icon: 'search', iconPosition: 'left'} }
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
            //   onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //     leading: true,
            //   })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
      )
    }

}






export default SearchBar