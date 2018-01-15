import React, { PureComponent } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { styles } from './styles.js';

export default class Main extends PureComponent {

  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
    console.log("Normal Counter update");
      console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.increment}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"/>
        <Text>{this.props.count}</Text>
        <Button
          onPress={this.props.decrement}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"/>
      </View>
    );
  }
}
