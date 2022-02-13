import { apiGetUsers } from "../app";
import { renderMoreRepos } from "../view/render-more-repos";

export async function handleMoreReposClick(id) {
  apiGetUsers.incrementReposPage();

  const moreRepos = await apiGetUsers.getRepos(id);
  if (moreRepos.length < apiGetUsers.reposPerPage) {
    const moreReposButton = document.querySelector(".moreRepos");
    moreReposButton.remove();
  }

  renderMoreRepos(moreRepos);
}
