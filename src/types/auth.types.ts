export interface LoginResponse {
  access_token: string;
  token_type: string;
  needOnBoarding: boolean;
}

export interface SignupResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
