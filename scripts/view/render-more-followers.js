export function renderMoreFollowers(followers) {
  const markup = `
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
  `;

  const userFollowers = document.querySelector(".followers__list");
  userFollowers.insertAdjacentHTML("beforeend", markup);
}
