import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import DisplaySection from './src/components/organisms/DisplaySection';
import CategorySection from './src/components/molecules/CategorySection';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <DisplaySection/>
        <CategorySection/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
