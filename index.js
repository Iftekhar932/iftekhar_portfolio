const navbar = document.getElementById("navbar");

const skillsSection = document.getElementById("skills");
const projectSection = document.getElementById("projects");

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
        if (window.scrollY == 0) {
          navbar.classList.add("navScrollEffect");
        } else {
          navbar.classList.remove("navScrollEffect");
        }
      });
      /*  window.addEventListener("scroll", () => {
        console.log(window.scrollY - element.boundingClientRect.height);
        if (window.scrollY <= element.boundingClientRect.height) {
          navbar.classList.add("navScrollEffect");
        } else {
          navbar.classList.remove("navScrollEffect");
        }
      }); */
    });
  },
  { threshold: 1 }
);
navBarObserver.observe(navbar);

const randomColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
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

/*  projects section background animation*/
// sorting the array elements in random order
randomColors.sort(() => Math.random() - 0.5);

for (let i = 0; i <= randomColors.length; i++) {
  const span = document.createElement("div");
  span.classList.add("colorfulLines");
  span.style.background = `${randomColors[i]}`;
  span.style.boxShadow = `0px 0px 80px 44px ${randomColors[i]}`;
  const r = Math.floor(Math.random() * 1233);
  console.log(r);
  span.style.transform = `translate(${r}%, ${r}% )`;

  document.body.appendChild(span);
}
