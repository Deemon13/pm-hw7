import "../styles/app.css";

import debounce from "lodash.debounce";

import getRefs from "./refs/get-refs";
import ApiGetUsers from "./services/api-services";

import { handleInput } from "./handlers/input";
import { onHandleMoreUsersClick } from "./handlers/more-users";
import { onUserHandleClick } from "./handlers/get-user";
import { handleSubmit } from "./handlers/submit";

export const refs = getRefs();
export const apiGetUsers = new ApiGetUsers();

refs.formRef.addEventListener("submit", handleSubmit);
refs.userSearcherRef.addEventListener("input", debounce(handleInput, 1000));
refs.usersList.addEventListener("click", onUserHandleClick);
refs.moreUsersButton.addEventListener("click", onHandleMoreUsersClick);
refs.moreUsersButton.setAttribute("hidden", true);
