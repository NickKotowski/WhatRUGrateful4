import React from 'react';
import { View,
         Text,
         TouchableWithoutFeedback
          } from 'react-native';

import { styles } from '../../styles.js';

export const Button = ({onPress, text, erase}) => {

  //creates the object in format {string: "xx", hashtags: ["healthy", "job"]};
  createObject = (text) => {
    let hashtags;
    var regexp = /\B\#\w\w+\b/g;
    result = text.match(regexp);
    if (result) hashtags = result;
    return {string: text, hashtags: hashtags}
  }

  onClick = () => {
    onPress(this.createObject(text));
    erase();
  }

  return(
    <TouchableWithoutFeedback
      style={styles.text}
      onPress={this.onClick}>
      <View style={[styles.textBackground, {backgroundColor: 'rgba(8,33,60, 0.62)'}]}>
        <Text style={styles.text}>Enter</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
