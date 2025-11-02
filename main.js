let main_sec = document.getElementById("main_section");

main_sec.addEventListener("click", function (see) {
  if (see.target.tagName === "BUTTON") {
    let child = see.target;
    let parent = child.parentElement.lastElementChild;

    let div = parent.lastElementChild;

    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  } else {
    console.log("no");
  }
});
