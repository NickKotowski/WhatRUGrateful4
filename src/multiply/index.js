import React, { PureComponent } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { styles } from './styles.js';

export default class Multiply extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillUpdate() {
    console.log("Multiplier update");
    console.log(this.props);
  }

  add() {
    this.setState({ count: this.state.count + 4 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.multiply}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"/>
        <Text>{this.props.count}</Text>
        <Button
          onPress={this.props.divide}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"/>
        <Button
          onPress={this.add.bind(this)}
          title="Add"
          color="#841584"
          accessibilityLabel="Add"/>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
