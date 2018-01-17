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
        return false
    }
    
    let hashtagsArray = []
    //loop over content array
    let content = this.props.content;
    for (let i=0; i < content.length; i++) {
      //analyse every object in the content array
      for (let j=0; j < content[i].hashtags.length; j++) {
        //get each hashtag of every "entry" (remember: user can enter multiple hashtags per string)
        let hashtag = content[i].hashtags[j];
        //check if hashtag is already in the temporary data array hashtagsArray
        let positionOfHashtag = findObjectByKey(hashtagsArray, hashtag);
        //if it is then positionOfHashtag will hold the position as an integer
        if (Number.isInteger(positionOfHashtag)) {
          hashtagsArray[positionOfHashtag].strings.push(content[i].string);
        //if undefined (array is empty) or false (hashtag not already there), then we simply add an object with the hashtag and the one string
        } else {
          hashtagsArray.push({hashtag: hashtag, strings: [content[i].string]})
        }
      }
    }
    //map the array - HashtagItem then maps the individual strings (see children/index.js)
    return hashtagsArray.map( (object)  => {
      return (
        <HashtagItem
          object={object} />
      )}
    )
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
