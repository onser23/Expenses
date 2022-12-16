import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Kontur',
    amount: 2.5,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'Geyim',
    amount: 40.6,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Mağaza',
    amount: 20.55,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'Telefon',
    amount: 409.0,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Kitab',
    amount: 6.5,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'Kitab',
    amount: 6.5,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e7',
    description: 'Kitab',
    amount: 6.5,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e8',
    description: 'Kitab',
    amount: 6.5,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e9',
    description: 'Kitab',
    amount: 6.1,
    date: new Date('2022-02-18'),
  },
];

const ExpensesOutput = ({expenses, periodName}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primar700,
  },
});
