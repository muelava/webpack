import generateJoke from "./generateJoke";
import "./styles/main.scss";
import avatar from "./assets/avatar.jpg";

const avatarImg = document.querySelector("#avatar");
avatarImg.src = avatar;

const jokeBtn = document.getElementById("btn-joke");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
