// ///////////////////
let gnb = document.querySelectorAll("#gnbb > li");
let gnbElement = document.querySelector("#gnbb");

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

let header = document.querySelector("#headerr");

header.addEventListener("mouseout", (e) => {
  if (e.target.id == "gnbb") {
    gnbElement.classList.remove("on");
  }
});

/////////////////////////

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".gnb");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

//////////////////////////////
