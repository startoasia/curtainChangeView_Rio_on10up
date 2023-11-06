function clickSky(element1, element2) {
  console.log(element1);
  console.log(element2);
  const skyBtn = document.querySelectorAll(`${element1} .showControl`);
  console.log(skyBtn);
  skyBtn.forEach((item) => {
    const sky = item.getAttribute("data-sky");
    if (sky == "morning") {
      item.classList.toggle("showControl--active");
      console.log(item);
    } else {
      item.classList.toggle("showControl--active");
    }
  });

  const showControl = document.querySelectorAll(`${element2} .showControl`);
  showControl.forEach((item) => {
    const sky = item.getAttribute("data-sky");
    if (sky == "morning") {
      item.classList.toggle("showControl--active");
    } else {
      item.classList.toggle("showControl--active");
    }
  });
}
const showScroll = document.querySelectorAll(".showScroll");
showScroll.forEach((item) => {
  // console.log(item.parentNode)
  window.addEventListener("scroll", () => {
    const a = item.getAttribute("data-show");
    if (window.scrollY >= item.parentNode.offsetTop - 100) {
      item.classList.add(`${a}showScroll--active`);
    } else {
      item.classList.remove(`${a}showScroll--active`);
    }
  });
});
const bg6 = document.querySelector(".bg6");
const thing6Video = document.querySelector(".thing6-3");
window.addEventListener("scroll", () => {
  if (window.scrollY >= bg6.offsetTop - 100) {
    setTimeout(() => {
      thing6Video.classList.add("thing6-3Show");
    }, 800);
  } else {
    thing6Video.classList.remove("thing6-3Show");
  }
});

// POPUP
function popShow(element) {
  const show = document.querySelector(`.${element}`);
  document.querySelector("body").style.overflow = "hidden";
  show.classList.add("popShow");
  show.style.overflowY = "scroll";
}
function popClose(element) {
  const close = document.querySelector(`.${element}`);
  document.querySelector("body").style.overflow = "visible";
  close.classList.remove("popShow");
  close.style.overflowY = "hidden";
}

// FV動畫
const thing1 = document.querySelector(".thing2-1");
const thing2 = document.querySelector(".thing2-2");
const thing3 = document.querySelector(".thing2-3");
const thing4 = document.querySelector(".thing2-4");
const marqueeSkyControl = document.querySelectorAll(".marqueeSkyControl img");
const marqueeGiftControl = document.querySelectorAll(".marqueeGiftControl img");

window.addEventListener("load", () => {
  setTimeout(function () {
    thing1.classList.add("zoomIn");
  }, 1250);
  setTimeout(function () {
    thing2.classList.add("zoomIn");
  }, 1500);
  setTimeout(function () {
    thing3.classList.add("rollIn");
  }, 1750);
  setTimeout(function () {
    thing4.classList.add("zoomIn");
  }, 2000);
  setTimeout(() => {
    marqueeSkyControl.forEach((item) => item.classList.add("marqueeSky"));
    marqueeGiftControl.forEach((item) => {
      item.classList.add("marqueeGift");
    });
  }, 3000);
});
const bg7 = document.querySelector(".bg7");
const marqueeGiftControl2 = document.querySelectorAll(
  ".marqueeGiftControl2 img"
);
console.log(marqueeGiftControl2);
window.addEventListener("scroll", () => {
  marqueeGiftControl2.forEach((item, ind) => {
    if (window.scrollY >= bg7.offsetTop - 100) {
      if (ind == 0) {
        item.classList.add("marqueeGiftslow");
      } else if (ind == 1) {
        item.classList.add("marqueeGiftslow2");
      }
    }
  });
});

const offerLink = document.querySelectorAll(".offerLink");
const header = document.querySelector("nav");
offerLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let a = item.getAttribute("href");
    const linkto = document.querySelector(a);
    console.log(linkto.offsetTop);
    if (a == "#offer"){
      console.log(linkto.parentNode.offsetTop);
      window.scrollTo({
        top: (linkto.parentNode.offsetTop+linkto.offsetTop) - header.clientHeight,
        behavior: "smooth",
      });
    }else{
      window.scrollTo({
        top: linkto.offsetTop - header.clientHeight,
        behavior: "smooth",
      });
    }
  });
});
