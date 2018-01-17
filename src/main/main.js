import React, { PureComponent } from 'react';
import { View,
         Button,
         Text,
         StyleSheet,
         Image,
         TouchableWithoutFeedback,
         Dimensions } from 'react-native';
import { styles } from '../styles.js';
import EnterItemScreen from '../enter';

const { height, width } = Dimensions.get('window');

export default class Main extends PureComponent {
  constructor(props) {
    super(props)
  }

  getScreen() {
    switch (this.props.currentPage) {
      case 'enter':
          return(
            <EnterItemScreen/>
          )
      case 'overview':
        break;
      default:

    }
  }

  getButtonName() {
    switch (this.props.currentPage) {
      case 'enter':
        return "Overview"
      case 'overview':
        return "Input"
      default:
        return "Overview"
    }
  }

  navigateTo() {
    switch (this.props.currentPage) {
      case 'enter':
        this.props.navigateTo('overview');
        break;
      case 'overview':
        this.props.navigateTo('enter');
        break;
      default:
        this.props.navigateTo('overview');
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/background.jpg')}
          style={[{height: height, width: width}, styles.backgroundImage]}/>
        <View style={styles.wrapper}>
          <View style={styles.main}>
            {this.getScreen()}
          </View>
          <TouchableWithoutFeedback
            onPress={this.navigateTo.bind(this)}>
            <View style={styles.footer}>
              <Text style={styles.text}>{this.getButtonName()}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
