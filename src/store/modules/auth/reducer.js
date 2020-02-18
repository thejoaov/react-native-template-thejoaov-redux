import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  profile: null,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      /**
       * This action can safely deleted after you implement
       * your own sign in method.
       */
      case '@auth/SIGN_IN_TEST': {
        draft.signed = true;
        break;
      }
      /**
       * These other might be useful.
       */
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.profile = action.payload.profile;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
