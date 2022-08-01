//change the content
changeInfo = () => {
  fetch(`ingredients.json`)
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
      console.log(
        (document.querySelector(
          ".change-img"
        ).innerHTML = `<img href=${data[0]}.image />`)
      );
      document.querySelector = `<p>${data[1]}.text</p>`;
    });
};
