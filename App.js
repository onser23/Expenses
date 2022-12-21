import {View, StatusBar} from 'react-native';
import React from 'react';
import NestedNavigator from './src/navigator/NestedNavigator';

import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './src/redux';

const App = () => {
  const store = createStore(reducers);
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#3e04c3" />
        <View style={{flex: 1}}>
          <NestedNavigator />
        </View>
      </Provider>
    </>
  );
};

export default App;
