// fetch the description from json
showDescription = () => {
  fetch("./products-descr.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".learn-more").style.display = "none";

      document.querySelector("#post-four").innerHTML = `<ul>
      <li>'${data[3].nameing}'</li>
      </ul>
      <p>'${data[3].Piperita}'</p>`;
    });
};
document.querySelector(".read-more").addEventListener("click", showDescription);
