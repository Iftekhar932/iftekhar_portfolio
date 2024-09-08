window.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollHeight - window.innerHeight); // whole document's height - device window height
  console.log(window.scrollY); // scrolled pixel
});
