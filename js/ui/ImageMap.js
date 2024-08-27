export default function resizeMap() {
  const images = document.querySelectorAll("img[usemap]");

  images.forEach((image) => {
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const widthRatio = image.clientWidth / imageWidth;
    const heightRatio = image.clientHeight / imageHeight;

    const mapName = image.getAttribute("usemap").substring(1);
    const map = document.querySelector(`map[name="${mapName}"]`);

    if (map) {
      map.querySelectorAll("area").forEach((area) => {
        const originalCoords = area.dataset.originalCoords || area.getAttribute("coords");
        if (!area.dataset.originalCoords) {
          area.dataset.originalCoords = originalCoords;
        }
        const coords = originalCoords.split(",").map((x, i) => {
          return i % 2 === 0 ? Math.round(x * widthRatio) : Math.round(x * heightRatio);
        });
        area.setAttribute("coords", coords.join(","));
      });
    }
  });
}
