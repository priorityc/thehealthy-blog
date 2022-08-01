// fetch the description from json
showDescription = () => {
  fetch("./products-descr.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".learn-more").style.display = "none";
      document.querySelector(
        "#post"
      ).innerHTML = `<p>'${data[0].description}'</p>`;
    });
};
document
  .querySelector(".learn-more")
  .addEventListener("click", showDescription);
