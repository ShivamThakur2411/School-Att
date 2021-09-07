import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class SubmitHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Summary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'pink',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SubmitHeader;
