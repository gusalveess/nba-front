import axios from "axios";
import { APICall } from "../Custom-Hooks/Api.js";
import { GetToken } from "../Custom-Hooks/Token.js";

const API = APICall();
const token = GetToken();

function GetMyProfile() {
  console.log(token);
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const promise = axios.get(`${API}/user/my`, config);
  return promise;
}

function GetTeams() {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const promise = axios.get(`${API}/choose/teams`, config);
  return promise;
}

function GetPlayer(search) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const promise = axios.get(`${API}/choose/${search}`, config);
  return promise;
}

function CreateInfo(body) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const promise = axios.post(`${API}/user/create`, body, config);
  return promise;
}

const UserInfoService = {
  GetMyProfile,
  GetTeams,
  GetPlayer,
  CreateInfo,
};

export default UserInfoService;
