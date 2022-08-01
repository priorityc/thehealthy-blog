showDescriptionTwo = () => {
  fetch("./products-descr.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".read-more").style.display = "none";
      document.querySelector(
        "#postOne"
      ).innerHTML = `<p>'${data[1].descriptiontwo}'</p>`;
    });
};
document
  .querySelector(".read-more")
  .addEventListener("click", showDescriptionTwo);
