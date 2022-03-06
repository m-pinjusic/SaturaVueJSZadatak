export function getUsers(state) {
  return state.data;
}
export function rows(state) {
  let rowsData = [];
  state.data.map((x) => {
    rowsData.push({
      name: x.name,
      user: x.username,
      email: x.email,
      id: x.id,
    });
  });
  return rowsData;
}

export function getLogUser(state) {
  return state.loggedUser;
}
export function getAdminData(state) {
  return state.adminData;
}
