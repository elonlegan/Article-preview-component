const FOOTER = document.getElementById("footer");
const SHARE = document.getElementById("share");
const ICON = document.getElementById("icon-share");
const AVATAR = document.getElementById("avatar");

const changeClassName = () => {
  if (ICON.classList.contains("active")) {
    FOOTER.classList.remove("active");
    SHARE.classList.remove("active");
    ICON.classList.remove("active");
    AVATAR.classList.remove("active");
  } else {
    FOOTER.classList.add("active");
    SHARE.classList.add("active");
    ICON.classList.add("active");
    AVATAR.classList.add("active");
  }
};
