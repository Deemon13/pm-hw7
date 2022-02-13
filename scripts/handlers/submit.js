// THIS IS AN EMPTY FUNCTION FOR FUTURE FEATURES

import { apiGetUsers } from "../app";
import { refs } from "../app";

export function handleSubmit(e) {
  e.preventDefault();

  refs.formRef.elements.user.value = apiGetUsers.query;

  if (!apiGetUsers.query) {
    alert("empty query");
    return;
  }
}
