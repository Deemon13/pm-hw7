export default function getRefs() {
  return {
    root: document.querySelector("#root"),
    formRef: document.querySelector("#search-form"),
    userSearcherRef: document.querySelector("#user_input"),
    messagefinder: document.querySelector(".message__finder"),
    usersList: document.querySelector(".users__list"),
    moreUsersButton: document.querySelector(".users__more"),
  };
}
