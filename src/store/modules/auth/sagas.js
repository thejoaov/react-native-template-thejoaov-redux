import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    /**
     * Desenvolva aqui seu saga de login
     */
    console.log('Tentativa de login :D');
  } catch (err) {
    Alert.alert(
      'Erro no login',
      'Não foi possível fazer o login no momento. Verifique as credenciais e tente novamente.'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
