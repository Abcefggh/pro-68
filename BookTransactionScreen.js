import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class TransactionScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>FACEBOOK</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    padding: 250,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
