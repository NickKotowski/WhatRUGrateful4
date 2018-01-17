import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View,
         Text,
         ScrollView
          } from 'react-native';

import { styles } from '../styles.js';
import { HashtagItem } from './children';

class DisplayItemsScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  getList() {
    //helper function to determine the position of an object in the array with a certain hashtag, if not returns false
    function findObjectByKey(array, value) {
      for (var i = 0; i < array.length; i++) {
          if (array[i]["hashtag"] === value) {
              return i
          }
      }
      return false;
    }

    let hashtagsArray = []
    //loop over content array
    let content = this.props.content;
    for (let i=0; i < content.length; i++) {
      for (let j=0; j < content[i].hashtags.length; j++) {
        let hashtag = content[i].hashtags[j];
        let positionOfHashtag = findObjectByKey(hashtagsArray, hashtag);
        if (positionOfHashtag) {
          hashtagsArray[positionOfHashtag].strings.push(content[i].string);
        } else {
          hashtagsArray.push({hashtag: hashtag, strings: [content[i].string]})
        }
      }
    }

    return hashtagsArray.map( (object)  => {
      return (
        <HashtagItem
          object={object} />
      )}
    )

    //first create an array with objects just consisting of all
    //create an array [{hashtag: '#barcelona', strings: ["bla", "bla", "bla"]}, {hashtag: '#health', strings: ["me", "you"]}]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.textBackground, {marginTop: 30}]}>
          <Text style={[styles.text, { width: 200, textAlign: 'center' }]}>Your tags of gratefulness sorted by # of mentions</Text>
        </View>
        <ScrollView style={{marginBottom: 30, marginTop: 20, width: 200}}>
          {this.getList()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
     content: state.MainReducer.content
});

export default connect(mapStateToProps)(DisplayItemsScreen);
