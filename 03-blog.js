// show the post with JSON
showPost = () => {
  fetch("./blog-posts.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#post").innerHTML = `<p>'${data[0].post}'</p>`;
    });
};

// count likes
const likeBtn = document.getElementById("like-btn"); /*the li p*/
const starBTn = document.getElementById("star-btn"); /* the star p*/
const like = document.getElementById("like"); //the button
const starEl = document.getElementById("star"); //the button
let count = 0;
let star = 0;

let sum = 0;

countLikes = (e) => {
  e.preventDefault();
  count += 1;
  likeBtn.textContent = "Likes: " + count;
};
like.addEventListener("click", countLikes);

countStars = (e) => {
  e.preventDefault();
  star += 1;
  console.log(star);
  starEl.textContent = "Stars: " + star;
};

starBTn.addEventListener("click", countStars);

// diaplaing comments

// func save comment
let formData = {};

showComments = (e) => {
  e.preventDefault();
  formData.Comment = document.querySelector("#comment").value;
  console.log(formData.Comment);

  if ((!formData.Comment).value) {
    return alert("Please write your comment");
  }

  // this is the input field
  localStorage.setItem("comment", formData);
  localStorage.setItem("comment", JSON.stringify(formData));
};
document.querySelector("#post-btn").addEventListener("click", showComments);
