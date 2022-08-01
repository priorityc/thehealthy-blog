let tnkEl = document.getElementById("thank-you");
// the other follow section

let formData = {};

follow = (e) => {
  e.preventDefault();
  formData.Email = document.querySelector("#emailTwo").value;
  console.log(formData.Email);
  if (!formData.Email) {
    return alert("Email must be filled out");
  } else if (formData.Email.indexOf("@") == -1) {
    return alert("Please enter valid Email");
  } else {
    localStorage.setItem("content", formData);
    localStorage.setItem("content", JSON.stringify(formData));
    tnkEl.innerHTML = "Thanks for subscribtion";
  }
};

document.querySelector(".btn").addEventListener("click", follow);

let tnkTwo = document.querySelector("#second-tnk");

subscribeTwo = (e) => {
  e.preventDefault();
  formData.email = document.querySelector("#emailTwo").value;

  if (!formData.email) {
    return alert("Email must be filled out!");
  } else if (formData.email.indexOf("@") == -1) {
    console.log(formData.email);
    return alert("Please enter valid Email");
  } else {
    localStorage.setItem("follow", formData);
    localStorage.setItem("follow", JSON.stringify(formData));
    tnkTwo.innerHTML = "Thanks for subscribtion";
  }
};
document.querySelector(".grey").addEventListener("click", subscribeTwo);
