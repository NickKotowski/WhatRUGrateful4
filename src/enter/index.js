import React, { PureComponent } from 'react';
import { View,
         Text,
         TextInput,
         TouchableWithoutFeedback
          } from 'react-native';
import { styles } from '../styles.js';

export default class EnterItemScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textInput: 'example'
    };
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
          onPress={this.props.addNewItem(this.state.textInput)}/>
      </View>
    );
  }
}


const Button = ({onPress}) => {
  const addNewItem = onPress;
  return(
    <TouchableWithoutFeedback
      style={styles.text}
      onPress={addNewIterm}>
      <View style={[styles.textBackground, {backgroundColor: 'rgba(8,33,60, 0.62)'}]}>
        <Text style={styles.text}>Enter</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
