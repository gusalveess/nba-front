import axios from "axios";
import { APICall } from "../Custom-Hooks/Api";

const API = APICall();

function SignUpService(body) {
  const promise = axios.post(`${API}/sign-up`, body);

  return promise;
}

function SignInService(body) {
  const promise = axios.post(`${API}/sign-in`, body);

  return promise;
}

const AuthenticationAPI = {
  SignUpService,
  SignInService,
};

export default AuthenticationAPI;
