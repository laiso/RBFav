import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Feed extends Component {
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
        this.setState({bookmarks})
      })
      .catch((error) => {
        console.warn(error);
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
