import { all, fork } from 'redux-saga/effects';

import * as userSagas from './user/sagas';

function* root() {
  yield all([
    /* USER */
    fork(userSagas.watchGetUserSaga),
    fork(userSagas.watchSignUpSaga),
    fork(userSagas.watchSignInSaga),
    fork(userSagas.watchVerifyEmailSaga),
    fork(userSagas.watchResetPasswordSaga),
    fork(userSagas.watchRequestPasswordResetSaga)
  ]);
}

export default root;
