/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: []
    }
  }
  componentDidMount() {
    fetch("http://feed.hbfav.com/laiso/bookmark")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.bookmarks;
      })
      .then((bookmarks) => {
        console.warn(bookmarks)
        this.setState({bookmarks})
      })
      .catch((error) => {
        console.error(error);
      })
  }
  render() {
    if (this.state.bookmarks.length === 0) {
      return (
        <Text>Loading...</Text>
      )    
    }

    const items = this.state.bookmarks.map( item =>
      { return <Text>{item.title}</Text> }
    )
    return (
      <View>{items}</View>
    )
  }
}

export default class RBFav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RBFav', () => RBFav);
