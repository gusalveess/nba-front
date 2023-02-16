import axios from "axios";
import { APICall } from "../Custom-Hooks/Api";
import { GetToken } from "../Custom-Hooks/Token";

const API = APICall();
const token = GetToken();

function SignUpService(body) {
  const promise = axios.post(`${API}/sign-up`, body);

  return promise;
}

function SignInService(body) {
  const promise = axios.post(`${API}/sign-in`, body);

  return promise;
}

function LogOut() {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const body = { headers: { Authorization: `Bearer ${token}` } };
  const promise = axios.post("http://localhost:4000/log-out", body, config);
  return promise;
}

const AuthenticationAPI = {
  SignUpService,
  SignInService,
  LogOut
};

export default AuthenticationAPI;
