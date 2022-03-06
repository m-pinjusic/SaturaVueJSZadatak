export function addUsers(state, payload) {
  state.data = payload;
}
export function loggedUser(state, payload) {
  state.loggedUser = payload;
}
export function logStatus(state, payload) {
  state.logStatus = payload;
}
export function logOut(state) {
  state.loggedUser = {};
}
export function addAdminData(state, payload) {
  state.adminData = payload;
}
