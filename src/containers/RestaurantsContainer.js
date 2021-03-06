import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant}/>
        <Restaurants delete={this.props.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.restaurants
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => dispatch({type: 'ADD_RESTAURANT', restaurant}),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
