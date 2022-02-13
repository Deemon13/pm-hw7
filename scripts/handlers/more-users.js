import { apiGetUsers } from "../app";
import { renderListOfUsers } from "../view/render-users";

export async function onHandleMoreUsersClick() {
  apiGetUsers.incrementPage();
  const users = (await apiGetUsers.getUsers()).data;
  renderListOfUsers(users.items);

  if (apiGetUsers.page > Math.ceil(users.total_count / apiGetUsers.perPage)) {
    refs.moreUsersButton.setAttribute("hidden", true);
    return;
  }
}
