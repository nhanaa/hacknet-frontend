export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface SignupResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
