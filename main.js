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

/*
let sec_section = document.getElementById("second_section");

function descElem() {
  let see_more_box = document.createElement("div");
  see_more_box.className = "see_more_box";
  // parent.appendChild(see_more_box);

  let h2 = document.createElement("h2");
  h2.textContent = "project title";
  see_more_box.appendChild(h2);

  let h3 = document.createElement("h3");
  h3.textContent = "description";
  see_more_box.appendChild(h3);

  let p = document.createElement("p");
  p.textContent = `"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa a tempore obcaecati optio id perspiciatis officiis suscipit
              est totam illum fugit eum sapiente nisi molestias voluptatum, eius
              laboriosam vel"`;
  see_more_box.appendChild(p);

  return see_more_box;
}

sec_section.addEventListener("click", function (see) {
  let see_more_box = null;
  if (see.target.tagName === "BUTTON") {
    let child = see.target;
    let parent = child.parentElement;
    console.log(parent);

    if (!see_more_box) {
      see_more_box = descElem();
      parent.appendChild(see_more_box);
    }
  } else {
    console.log("no");
  }
});

*/
