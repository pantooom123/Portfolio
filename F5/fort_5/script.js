//////////////부드럽게 스크롤/////////
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/////////////////////sec1//////////////////
const ani1 = gsap.timeline();
ani1.to("#section1 .sec1-img ", { width: "100%", height: "100%" });

ScrollTrigger.create({
  animation: ani1,
  trigger: "#section1",
  start: "top top",
  end: "bottom center",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

/////////////////////sec2//////////////////
const ani2 = gsap.timeline();
ani2
  .from("#section2 .i1", { y: -100, autoAlpha: 0 })
  .from("#section2 .i2", { y: -100, autoAlpha: 0 })
  .from("#section2 .i3", { y: -100, autoAlpha: 0 })
  .from("#section2 .i4", { y: -50, autoAlpha: 0 });
ScrollTrigger.create({
  animation: ani2,
  trigger: "#section2",
  start: "top top",
  end: "+=1500",
  markers: false,
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
/////////////////////////////////////

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".gnb");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  let pElement = menu.querySelector("p");
  if (navbar.classList.contains("open")) {
    pElement.textContent = "CLOSE";
  } else {
    pElement.textContent = "MENU";
  }
};
///////////////////////////////////////////////
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});
/////////////////////////////////////////////
let roller = document.querySelector(".box4-layout");
roller.id = "roller1";
let clone = roller.cloneNode(true);

clone.id = "roller2";
document.querySelector(".box4").appendChild(clone);

roller.classList.add("original");
clone.classList.add("clone");
