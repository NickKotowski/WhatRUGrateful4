import React from 'react';
import { View,
         Text } from 'react-native';

import { styles } from '../../styles.js';

export const HashtagItem = ({object}) => {

  getChildren = (object) => {
    return object.strings.map( (text) => {
      return(
        <HashtagText
          text={text}/>
      )
    })
  }
  return(
    <View>
      <View  style={[styles.textBackground, {backgroundColor: 'rgba(8,33,60, 0.62)', marginTop: 20}]}>
        <Text style={[styles.text, {textAlign: 'center', fontSize: 40}]}>{object.strings.length}</Text>
        <Text style={[styles.text, {textAlign: 'center', padding: 10}]}>{object.hashtag}</Text>
        {this.getChildren(object)}
      </View>
    </View>
  )
}

export const HashtagText = ({text}) => {

  return(
    <View style={[styles.textBackground, {backgroundColor: 'rgba(8,33,60, 0.62)', marginTop: 20, flex: 1}]}>
      <Text style={[styles.text, {textAlign: 'center', padding: 10}]}>{text}</Text>
    </View>
  )
}
