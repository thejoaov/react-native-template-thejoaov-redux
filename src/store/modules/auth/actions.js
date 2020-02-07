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
