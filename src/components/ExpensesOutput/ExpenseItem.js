import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';
import {getFormatDate} from '../../../util/Date';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({description, amount, date}) => {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpenses');
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}> {getFormatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primar500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primar50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primar500,
    fontWeight: 'bold',
  },
});
