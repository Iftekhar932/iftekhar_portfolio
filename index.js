const navbar = document.getElementById("navbar");
const skillsSection = document.getElementById("skills");
const projectSection = document.getElementById("projects");
const introductionSection = document.getElementById("about");
const allSections = document.querySelectorAll("section");

// logic for navbar buttons leading to sections
const navButtons = navbar.childNodes;
for (const singleButton of navButtons) {
  singleButton.addEventListener("click", (e) => {
    console.log(e.target.getBoundingClientRect().y);
    const sectionById = document.getElementById(
      e.target.textContent.toLowerCase()
    );
    scroll(0, sectionById.getBoundingClientRect().y - window.innerHeight + 600);
  });
}

// smaller screen navbar toggle button logic
const navCrossButton = document.getElementById("cross-button");
navCrossButton.addEventListener("click", (e) => {
  // e.target.innerHTML = `<span id="cross-button" class="cross-button">&#9776;</span>`; // need to remove previous one

  // change icon
  e.target.textContent == "☰"
    ? (e.target.textContent = "X")
    : (e.target.textContent = "☰");

  // change style
  e.target.textContent == "☰"
    ? navbar.classList.remove("displayNav")
    : navbar.classList.add("displayNav");
});

// navBar background color change with scroll
const navBarObserver = new IntersectionObserver(
  (elements) => {
    elements.forEach((element) => {
      // when navbar is on top of the whole page it'll have transparent background
      if (window.scrollY == 0) {
        // navbar.classList.add("navScrollEffect");
      }
      window.addEventListener("scroll", () => {
        if (
          window.scrollY - element.boundingClientRect.height <
          element.boundingClientRect.height
        ) {
          navbar.classList.add("navScrollEffect");
        } else {
          navbar.classList.remove("navScrollEffect");
        }
      });
    });
  },
  { threshold: 0 }
);
navBarObserver.observe(navbar);

const scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // console.log(entry,entry.boundingClientRect.y,entry.isIntersecting);
      if (entry.isIntersecting) {
        document.querySelectorAll("#navbar span").forEach((e) => {
          if (e.textContent.toLowerCase().includes(entry.target.id)) {
            console.log(entry.target.id);
            e.style.color = "white";
          } else {
            e.style.color = "inherit";
          }
        });
      } else {
        entry.target.style.color = "inherit";
      }
    });
  },
  { threshold: 0.5 }
);

scrollSpyObserver.observe(allSections[0]);
scrollSpyObserver.observe(allSections[1]);
scrollSpyObserver.observe(allSections[2]);
// console.log(document.querySelectorAll("section"))
/* 
window.addEventListener("scroll", () => {
  console.log(allSections[0].scrollHeight, window.scrollY);
  if (window.scrollY >= allSections[0].scrollHeight) {
    document.querySelectorAll("nav span")[0].style.color="white"
  }else{
    document.querySelectorAll("nav span")[0].style.color="inherit"
  }
  allSections.forEach((element) => {
    // console.log(element.getBoundingClientRect().y)
  });
}); */

//🟪 BODY TAG RELATED ANIMATIONS START🟪
// colors name array
const randomColors = [
  "blueViolet",
  "red",
  "green",
  "yellow",
  "orange",
  "orangeRed",
  "purple",
  "fuchsia",
  "crimSon",
  "yellow",
  "lightYellow",
  "greenYellow",
  "aliceBlue",
  "goldenRod",
  "gold",
  "darkOrange",
  "aquaMarine",
  "aqua",
  "peachPuff",
  "mediumSlateBlue",
  "hotPink",
  "deepPink",
  "cyan",
  "lightblue",
  "pink",
  "yellow",
  "skyBlue",
  "green",
  "lightGreen",
  "lightCyan",
  "paleturquoise",
  "lightGreen",
  "lime",
  "limeGreen",
  "powderBlue",
  "magenta",
  "mintCream",
];
let bodyBGColors = [
  // "blueViolet",
  // "aliceBlue",
  // "beige",
  // "bisque",
  // "skyBlue",
  // "pink",
  "mediumPurple",
  "rebeccaPurple",
  // "plum",
  "cadetBlue",
  "slateBlue",
  // "steelBlue",
  "mediumSlateBlue",
  // "deepSkyBlue",
];
// sorting the array elements in random order
randomColors.sort(() => Math.random() - 0.5);
bodyBGColors.sort(() => Math.random() - 0.5);

let i = 0;
document.body.style.transitionDuration = "5s";
introductionSection.style.transitionDuration = "5s";
setInterval(() => {
  i > bodyBGColors.length ? (i = 0) : i;
  i++;
  document.body.style.setProperty("backGround", bodyBGColors[i]);
}, 20000);

// generating span tags with necessary attributes (more css available in css file for these span tags with the class name)
for (let i = 0; i <= randomColors.length; i++) {
  const span = document.createElement("span");
  span.style.background = `${randomColors[i]}`;
  span.style.boxShadow = `0px 0px 10px 1px ${randomColors[i]}`;

  span.id = "colorSpans";
  span.classList.add("colorFulLines");

  // Add a random initial position
  span.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  span.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

  document.body.append(span);

  // generates random initial position for each color after interval
  setInterval(() => {
    span.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
    span.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
  }, 1200);
}
// colorful span tags positioning along with scroll
const colorSpans = [...document.querySelectorAll("#colorSpans")];
// making sure array is not empty
if (colorSpans[0]) {
  window.addEventListener("scroll", () => {
    // if span tags scrollY position is greater than the window scrollX position or scrollY position then change the tag's position
    for (const singleSpan of colorSpans) {
      if (
        singleSpan.getBoundingClientRect().y > window.scrollX ||
        window.scrollY
      ) {
        singleSpan.style.top = `${Math.max(
          300,
          Math.floor(Math.random() * window.innerHeight)
        )}px`;
        singleSpan.style.left = `${Math.max(
          300,
          Math.floor(Math.random() * window.innerWidth)
        )}px`;
      }
    }
  });
}
//🟪 BODY TAG RELATED ANIMATIONS START END 🟪
