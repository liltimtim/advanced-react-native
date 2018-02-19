import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Ball from './src/Ball';
import Deck from './src/Deck';
import { Container, Content, Header, Text, Card, CardItem, Button, View } from 'native-base';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {

  renderCard(item) {
    const { text, uri, id } = item;
    return (
      <Card 
      key={id}>
        <CardItem>
          <Text>{text}</Text>
        </CardItem>
        <CardItem body>
          <Image
            source={{uri: uri}}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Button 
          block
          light
          style={{width: '100%'}}
          >
            <Text>Press Me</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Header />
        <View>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
