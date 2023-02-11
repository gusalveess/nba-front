export function GetToken() {
  const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
  return token;
}