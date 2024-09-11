const navCrossButton = document.getElementById("cross-button");
const navbar = document.getElementById("navbar");
const skillsSection = document.querySelector("#skills");

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

const elementObserver = new IntersectionObserver(
  (elements) => {
    elements.forEach((element) => {
      window.addEventListener("scroll", () => {
        if (window.scrollY <= element.boundingClientRect.height) {
          navbar.classList.add("navScrollEffect");
        }
      });
    });
  },
  { threshold: 1 }
);
elementObserver.observe(navbar);

/* window.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollHeight - window.innerHeight); // whole document's height - device window height
  console.log(window.scrollY); // scrolled pixel
});
 */
const elementToDoStuff = document.querySelector("random-element");
// When an element is visible(partially or fully based on "threshold" setting below) in the screen, it  is intersected by Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("className", entry.isIntersecting); // "entry.isIntersecting" can be true or false, depending on in value that specified class will be added
      if (entry.isIntersecting) observer.unobserve(entry.target); // this line is to make sure only ones an element is observed, which intersected only ones.(If needed)
    });
  },
  {
    threshold: 1, // "1" means the whole element(100%) has to be visible, 0  means the least amount of the element, 0.5 means 50%. NOTE: default is 0
    //rootMargin: "-100px",
    /*
    About "rootMargin"  ⬇️
  the code above  making the whole container -100px smaller, it's like having the window shortened,
     events regarding window size will be triggered -100px earlier, 
     if the "-" is off it'll enlarge the window,(example use case: pre-loading images before scrolling to the point where it should be visible) */
  }
);

document.querySelectorAll(".navbar span").forEach((element) => {
  // console.log(element);

  observer.observe(element); //  using observe method to observe the element
});
