import { apiGetUsers } from "../app";
import { renderMoreFollowing } from "../view/render-more-following";

export async function handleMoreFollowingClick(id) {
  apiGetUsers.incrementFollowingPage();

  const moreFollowing = await apiGetUsers.getFollowing(id);
  if (moreFollowing.length < apiGetUsers.followingPerPage) {
    const moreFollowingButton = document.querySelector(".moreFollowing");
    moreFollowingButton.remove();
  }

  renderMoreFollowing(moreFollowing);
}
