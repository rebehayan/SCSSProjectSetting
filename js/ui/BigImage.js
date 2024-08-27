export default function bigImage() {
  const buttonBig = document.querySelectorAll(".btn-view");
  const popover = document.getElementById("relic-big");

  const popoverImage = (imageSrc, imageAlt) => {
    const image = popover.querySelector("img");

    image.setAttribute("src", imageSrc);
    image.setAttribute("alt", imageAlt);
  };

  buttonBig.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.previousElementSibling;
      const imageSrc = image.getAttribute("src");
      const imageAlt = image.getAttribute("alt");

      popoverImage(imageSrc, imageAlt);
    });
  });
}
