import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Electricity',
    note: '',
    amount: 12000,
    createdAt: 93827
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Gem',
    note: '123',
    amount: 200000,
    createdAt: 12345
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: updates
  };

  const state = expensesReducer(expenses, action);

  expect(state[1]).toEqual({...updates, id: expenses[1].id});
});

test('should edit an expense', () => {
  const updates = {
    description: 'Gem',
    note: '123',
    amount: 200000,
    createdAt: 12345
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
