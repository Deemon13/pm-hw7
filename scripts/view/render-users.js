import { refs } from "../app";

export function renderListOfUsers(data) {
  const markup = data
    .map((user) => {
      return `
            <li class="user__item" id="${user.login}">
                <a class="link user__link" href="#">
                    <img class="user__avatar" src="${user.avatar_url}" width="100" height="100" />
                    <div class="user__info-container">
                        <span class="user__nickname">${user.login}</span>
                    </div>
                </a>
            </li>
        `;
    })
    .join("");

  refs.usersList.insertAdjacentHTML("beforeend", markup);
}
