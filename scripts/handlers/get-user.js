import { apiGetUsers } from "../app";
import { refs } from "../app";
import { handleMoreReposClick } from "./more-repos";
import { handleMoreFollowersClick } from "./more-followers";
import { handleMoreFollowingClick } from "./more-following";
import { renderUser } from "../view/render-one-user";

export async function onUserHandleClick(e) {
  refs.moreUsersButton.setAttribute("hidden", true);
  let userId = "null";
  if (e.target.nodeName === "IMG") {
    userId = e.target.parentNode.parentNode.id;
  }
  if (e.target.nodeName === "SPAN") {
    userId = e.target.parentNode.parentNode.parentNode.id;
  }
  if (e.target.nodeName === "LI") {
    userId = e.target.id;
  }

  const user = await apiGetUsers.getUserByName(userId);
  const repos = await apiGetUsers.getRepos(userId);
  const followers = await apiGetUsers.getFollowers(userId);
  const following = await apiGetUsers.getFollowing(userId);

  renderUser(user, repos, followers, following);

  if (document.querySelector(".moreRepos")) {
    const moreReposButton = document.querySelector(".moreRepos");
    moreReposButton.addEventListener("click", () => {
      handleMoreReposClick(userId);
    });
  }

  if (document.querySelector(".moreFollowers")) {
    const moreFollowersButton = document.querySelector(".moreFollowers");
    moreFollowersButton.addEventListener("click", () => {
      handleMoreFollowersClick(userId);
    });
  }

  if (document.querySelector(".moreFollowing")) {
    const moreFollowingButton = document.querySelector(".moreFollowing");
    moreFollowingButton.addEventListener("click", () => {
      handleMoreFollowingClick(userId);
    });
  }
}
