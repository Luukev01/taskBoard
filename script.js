let button = document.querySelector("button");
// const modal = document.querySelector("#modalForm");

const formModal = new bootstrap.Modal(
  document.getElementById("staticBackdrop"),
  {}
);

const modalOpen = () => {
  formModal.show();
};

button.addEventListener("click", modalOpen);
formModal.show();
