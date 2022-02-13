import { refs } from "../app";

export function renderUser(name, repos, followers, following) {
  const user = document.createElement("div");
  const markup = `
      <div class="user-card__container">
        <div class="user-card__avatar">
          <a
            class="link user-card__link"
            target="_blank"
            rel="noreferrer noopener"
            href="${name.html_url}">
            <img
              class="user-card__img"
              src="${name.avatar_url}"
              width="300"
              height="300"
            />
            <p class="user-card__name">${
              !name.name ? name.login : name.name
            }</p>
          </a>
        </div>
        <div class="user-card__info">
          <div class="repos">
            <p class="title repos__title">Repositories (${
              name.public_repos
            }):</p>
            <ul class="list repos__list">
              ${repos
                .map((el) => {
                  return `<li class="repos__item">
                            <a class="link repos__link"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="${el.html_url}">${el.name}
                            </a>
                          </li>`;
                })
                .join("")}
            </ul>
            ${
              name.public_repos <= repos.length
                ? ""
                : `<button class="moreRepos" type="button">more</button>`
            }
          </div>
          <div class="followers">
            <p class="title followers__title">Followers (${name.followers}):</p>
            <ul class="list followers__list">
              ${followers
                .map((el) => {
                  return `<li class="followers__item">
                            <a class="link followers__link"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="${el.html_url}">
                              <img class="followers__img" src="${el.avatar_url}" width="100" height="100" />
                              <span class="followers__name">${el.login}</span>
                            </a>
                          </li>`;
                })
                .join("")}
            </ul>
            ${
              name.followers <= followers.length
                ? ""
                : `<button class="moreFollowers" type="button">more</button>`
            }
          </div>
          <div class="following">
            <p class="title following__title">Following (${name.following}):</p>
            <ul class="list following__list">
              ${following
                .map((el) => {
                  return `<li class="following__item">
                            <a class="link following__link"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="${el.html_url}">
                              <img class="following__img" src="${el.avatar_url}" width="100" height="100" />
                              <span class="following__name">${el.login}</span>
                            </a>
                          </li>`;
                })
                .join("")}
            </ul>
            ${
              name.following <= following.length
                ? ""
                : `<button class="moreFollowing" type="button">more</button>`
            }
          </div>
        </div>
      </div>
  `;
  refs.usersList.innerHTML = "";
  refs.messagefinder.innerHTML = "";
  refs.root.append(user);
  user.classList.add("user-wrapper");
  user.innerHTML = markup;
}
