import React, { Component } from 'react';
import { 
  View, 
  Animated, 
  PanResponder 
} from 'react-native'
import { Card, CardItem } from 'native-base';

class Deck extends Component {
  constructor(props) {
    super(props);
    // should set pan responder: asks if this particular element should begin the pan responder
    // panrespondermove: called whenever pan is moving
    // pan responder release: whenever the user takes their finger off the screen
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {return true;},
      onPanResponderMove: (event, gesture) => { 
        console.log("pan");
        console.log(gesture); 
        console.log(event);
      },
      onPanResponderRelease: () => { }
    });
    // don't be fooled, panResponder is assigned to state 
    // only to reference it in other code locations
    this.state = { panResponder };
  }
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return (
      <View {...this.state.panResponder.panHandlers}>
        {this.renderCards()}
      </View>
    )
  }
}

export default Deck;