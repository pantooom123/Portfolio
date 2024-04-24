let gnb = document.querySelectorAll("#gnbb > li");
let gnbElement = document.querySelector("#gnbb");

let roller = document.querySelector(".news-layout");
roller.id = "roller1";
let clone = roller.cloneNode(true);

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

let header = document.querySelector("#header");

header.addEventListener("mouseout", (e) => {
  if (e.target.id == "gnbb") {
    gnbElement.classList.remove("on");
  }
});

clone.id = "roller2";
document.querySelector(".sec-news").appendChild(clone);

roller.classList.add("original");
clone.classList.add("clone");

/////////////////////////////////////

const carousel = document.querySelector(".m-t-sec-top");
const arrowBtns = document.querySelectorAll(".main-top-sec i");
const firstCardWidth = carousel.querySelector(".sec-top_box").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = function (e) {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = function (e) {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = function (e) {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//////메인 visual

document.addEventListener("DOMContentLoaded", function () {
  let imagePaths = ["img/asd2.png", "img/asd3.png", "img/asd1.png"];

  let currentIndex = 0;
  let imgElement = document.querySelector(".visual-img img");
  let intervalId;

  function changeImage() {
    imgElement.src = imagePaths[currentIndex];
    currentIndex = (currentIndex + 1) % imagePaths.length;
  }

  function startImageChange() {
    intervalId = setInterval(changeImage, 3000);
  }

  // 초기 이미지 설정
  changeImage();

  // 5초마다 이미지 변경
  startImageChange();

  // 호버 이벤트 처리
  let secTopBox = document.querySelector(".visual-img");

  secTopBox.addEventListener("mouseenter", function () {
    clearInterval(intervalId); // 호버 시간 간격 중지
  });

  secTopBox.addEventListener("mouseleave", function () {
    startImageChange(); // 호버 해제 시 다시 시작
  });
});

// 모바일 메뉴 슬라이더

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#gnbb");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
