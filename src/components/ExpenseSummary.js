import React from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import pluralize from 'pluralize';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {pluralize('expense', expenseCount)} totalling <span>{formattedExpenseTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpense = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpense.length,
    expenseTotal: selectExpensesTotal(visibleExpense)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
