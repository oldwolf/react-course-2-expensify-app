import React from 'react';
import { connect }  from  'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import pluralize from 'pluralize';

export const ExpenseSummary = (props) => (
  <div>
    <h1>Viewing {props.expenses.length} {pluralize('expense', props.expenses.length)} totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</h1>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
