import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
  },
  wrapper: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBottom: {
    bottom: 0
  },
  textBackground: {
    backgroundColor: 'rgba(100,100,100,0.5)',
    padding: 15,
    borderRadius: 50
  },
  textInput: {
    height: 30,
    width: 200,
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 0
  }
});
