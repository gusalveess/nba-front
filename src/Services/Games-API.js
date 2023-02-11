import axios from "axios";
import { GetToken } from "../Custom-Hooks/Token";
import { APICall } from "../Custom-Hooks/Api";

const API = APICall();

function GamesLiveService() {
  const promise = axios.get(`${API}/games/live`);
  return promise;
}

function GamePerDate(format) {
    const promise = axios.get(`${API}/games/date/${format}`);
    return promise
}

function ChooseService(gameid) {
  const promise = axios.get(`${API}/games/${gameid}`);
  return promise;
}

function PostCommentService(body) {
  const token = GetToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const promise = axios.post(
    `${API}/comments/create`,
    body,
    config
  );
  return promise;
}

function GetComments(gameid) {
  const commentPromise = axios.get(`${API}/comments/${gameid}`);
  return commentPromise;
}

function GetTeamsGame(gameid) {
  const promise = axios.get(`${API}/games/stats/${gameid}`);

  return promise;
}

function GetStanding(conference) {
  const promise = axios.get(`${API}/standings/${conference}`);

  return promise;
}

const GamesService = {
  GamesLiveService,
  ChooseService,
  PostCommentService,
  GetComments,
  GetTeamsGame,
  GamePerDate,
  GetStanding
};

export default GamesService;
