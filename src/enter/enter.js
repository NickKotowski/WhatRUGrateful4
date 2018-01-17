import React, { PureComponent } from 'react';
import { View,
         Text,
         TextInput
          } from 'react-native';
import { styles } from '../styles.js';

import { Button } from './children/Button.js';

export default class EnterItemScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textInput: 'example'
    };
  }

  deleteInputFieldText() {
    this.setState({ textInput: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBackground}>
          <Text style={styles.text}>What are you thankful for?</Text>
        </View>
        <TextInput
          style={[styles.text, styles.textInput]}
          onChangeText={(text) => this.setState({textInput: text})}
          value={this.state.textInput}
          selectionColor={'white'}/>
        <Button
          onPress={this.props.addNewItem}
          text={this.state.textInput}
          erase={this.deleteInputFieldText.bind(this)}/>
      </View>
    );
  }
}
