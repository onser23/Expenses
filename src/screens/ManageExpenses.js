import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import IconButton from '../components/UI/Icon';
import {GlobalStyles} from '../constants/styles';
import Button from '../components/UI/Button';

import {useDispatch, useSelector} from 'react-redux';
import {setAllExpenses} from '../redux/action';

const ManageExpenses = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpensesHandler() {
    dispatch(
      setAllExpenses(
        GeneralResponse.allExpenses.filter(
          expenses => expenses.id !== editedExpenseId,
        ),
      ),
    );
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        setAllExpenses(
          GeneralResponse.allExpenses.map(obj => {
            if (obj.id === editedExpenseId) {
              return {
                ...obj,
                id: editedExpenseId,
                amount: 3.33,
                date: new Date('2022-02-19'),
                description: 'Sweden',
              };
            }

            return obj;
          }),
        ),
      );
      navigation.goBack();
    } else {
      dispatch(
        setAllExpenses([
          ...GeneralResponse.allExpenses,
          {
            id: 'e99',
            description: 'Banan',
            amount: 2.4,
            date: new Date('2022-02-19'),
          },
        ]),
      );
      navigation.goBack();
    }
  }
  console.log(GeneralResponse.allExpenses);
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpensesHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primar800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primar200,
    alignItems: 'center',
  },
});
