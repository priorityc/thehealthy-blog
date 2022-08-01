showDescriptionThree = () => {
  fetch("./products-descr.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".read-more").style.display = "none";
      document.querySelector(
        "#post-three"
      ).innerHTML = `<p>'${data[2].descriptionthree}'</p>`;
    });
};
document
  .querySelector(".read-more")
  .addEventListener("click", showDescriptionThree);
