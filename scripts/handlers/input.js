import { apiGetUsers } from "../app";
import { refs } from "../app";
import { renderListOfUsers } from "../view/render-users";

export async function handleInput(e) {
  refs.formRef.elements.submit.setAttribute("disabled", true);
  refs.usersList.innerHTML = "";
  apiGetUsers.resetPage();
  apiGetUsers.resetReposPage();
  apiGetUsers.resetFollowersPage();
  apiGetUsers.resetFollowingPage();
  apiGetUsers.query = refs.formRef.elements.user.value.trim();

  if (!apiGetUsers.query) {
    refs.messagefinder.textContent = "";
    refs.usersList.innerHTML = "";
    refs.moreUsersButton.setAttribute("hidden", true);
    refs.formRef.elements.submit.removeAttribute("disabled");
    return;
  }

  if (document.querySelector(".user-wrapper")) {
    const user = document.querySelector(".user-wrapper");
    user.remove();
  }

  const users = (await apiGetUsers.getUsers()).data;
  refs.messagefinder.textContent = `find ${users.total_count} users`;

  renderListOfUsers(users.items);

  if (users.total_count <= users.items.length) {
    refs.moreUsersButton.setAttribute("hidden", true);
    return;
  }
  refs.moreUsersButton.removeAttribute("hidden");
}
