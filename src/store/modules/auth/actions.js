/**
 * These two actions can be safely deleted
 * after you implement your own sign in method
 * @auth/SIGN_IN_TEST
 * @auth/SIGN_OUT_TEST
 */

export function signInTest() {
  return {
    type: '@auth/SIGN_IN_TEST',
  };
}

export function signOutTest() {
  return {
    type: '@auth/SIGN_OUT_TEST',
  };
}

export function signInRequest(usuario, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { usuario, senha },
  };
}

export function signInSuccess(token, profile) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, profile },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
