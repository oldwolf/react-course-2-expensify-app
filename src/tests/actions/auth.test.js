import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  login,
  startLogin,
  logout,
  startLogout
} from '../../actions/auth';
import authReducer from '../../reducers/auth';
import { firebase, googleAuthProvider } from '../../firebase/firebase';


test('should generate login action object', () => {
  const uid = 'abc123';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});