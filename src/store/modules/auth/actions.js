export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token, usuario) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: {
      token,
      usuario,
    },
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
