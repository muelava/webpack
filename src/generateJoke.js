import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "applications/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    console.log(res);
    document.getElementById("joke").innerHTML = res.data;
  });
}

export default generateJoke;
