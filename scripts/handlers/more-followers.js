import { apiGetUsers } from "../app";
import { renderMoreFollowers } from "../view/render-more-followers";

export async function handleMoreFollowersClick(id) {
  apiGetUsers.incrementFollowersPage();

  const moreFollowers = await apiGetUsers.getFollowers(id);
  if (moreFollowers.length < apiGetUsers.followersPerPage) {
    const moreFollowersButton = document.querySelector(".moreFollowers");
    moreFollowersButton.remove();
  }

  renderMoreFollowers(moreFollowers);
}
