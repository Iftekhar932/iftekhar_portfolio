const navbar = document.getElementById("navbar");
const skillsSection = document.getElementById("skills");
const projectSection = document.getElementById("projects");
const introductionSection = document.getElementById("introduction");

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
        navbar.classList.add("navScrollEffect");
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
  { threshold: 1 }
);
navBarObserver.observe(navbar);


/******  projects section background animation ******/
// colors name array
const randomColors = [
  "red",
  "green",
  "yellow",
  "orange",
  "aliceBlue",
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

// sorting the array elements in random order
randomColors.sort(() => Math.random() - 0.5);

// generating span tags with necessary attributes (more css available in css file for these span tags with the class name)
for (let i = 0; i <= randomColors.length; i++) {
  const span = document.createElement("span");
  span.style.background = `${randomColors[i]}`;
  span.style.boxShadow = `0px 0px 10px 1px ${randomColors[i]}`;

  span.id = "colorSpans";
  span.classList.toggle("colorFulLines", i % 2 == 1);
  span.classList.toggle("colorRight", i % 2 == 0);

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
if (colorSpans[0]) {
  window.addEventListener("scroll", () => {
    console.log(
      document.body.scrollWidth,
      colorSpans[0].getBoundingClientRect().y
    );

    // if span tags scrollY position is greater than the window scrollX position or scrollY position then change the tag's position
    for (const singleSpan of colorSpans) {
      if (singleSpan.getBoundingClientRect().y > window.scrollX || window.scrollY) {
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
