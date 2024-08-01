setTimeout(() => {
  document.querySelector(".landing .image img").classList.add("active");
  document.querySelector(".landing .info").classList.add("active");
}, 500);

let regex = /\w+@[a-z]{2,}\.[a-z]{2,}/gi;
document.forms[0].onsubmit = function (e) {
  if (document.querySelector("input").value.match(regex)) {
    document.querySelector(".error-mesg").classList.remove("active");
    document.querySelector("input").value = "";
  } else {
    document.querySelector(".error-mesg").classList.add("active");
  }
  e.preventDefault();
};
