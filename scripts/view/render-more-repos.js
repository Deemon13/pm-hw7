export function renderMoreRepos(repos) {
  const markup = `
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
  `;

  const userRepos = document.querySelector(".repos__list");
  userRepos.insertAdjacentHTML("beforeend", markup);
}
