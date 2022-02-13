export function renderMoreFollowing(following) {
  const markup = `
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
    .join("")}`;

  const userFollowing = document.querySelector(".following__list");
  userFollowing.insertAdjacentHTML("beforeend", markup);
}
