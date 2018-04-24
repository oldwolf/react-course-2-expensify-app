import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const waterBill = store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 5000 }));
const gasBill = store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1000 }));
const Rent = store.dispatch(addExpense({ description: 'Rent', amount: 5500, createdAt: 109500 }));
// store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
