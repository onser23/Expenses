import {View, StatusBar} from 'react-native';
import React from 'react';
import NestedNavigator from './src/navigator/NestedNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#3e04c3" />
      <View style={{flex: 1}}>
        <NestedNavigator />
      </View>
    </>
  );
};

export default App;
