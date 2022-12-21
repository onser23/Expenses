import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RecentExprenses from '../screens/RecentExprenses';
import AllExprenses from '../screens/AllExprenses';
import ManageExpenses from '../screens/ManageExpenses';

import {GlobalStyles} from '../constants/styles';
import IconButton from '../components/UI/Icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExprensesOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primar500},
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primar500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
          />
        ),
      })}>
      <Tab.Screen
        name="RecentExprenses"
        component={RecentExprenses}
        options={{
          title: 'Son Xərclər',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExprenses"
        component={AllExprenses}
        options={{
          title: 'Bütün Xərclər',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const NestedNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primar500},
          headerTintColor: '#ffffff',
        }}>
        <Stack.Screen
          name="ExprensesOverview"
          component={ExprensesOverview}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpenses}
          options={{
            // title: 'Manage Expenses',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NestedNavigator;
