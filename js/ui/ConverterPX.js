export default function ConverterPX() {
  if (window.innerWidth >= 720) {
    const allElements = document.querySelectorAll("*");
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    allElements.forEach(function (element) {
      const computedStyle = getComputedStyle(element);
      const style = element.style;

      for (let i = 0; i < computedStyle.length; i++) {
        const property = computedStyle[i];
        const value = computedStyle.getPropertyValue(property);
        console.log(value);

        if (value.includes("vw")) {
          const vwValue = parseFloat(value);
          const pxValue = (vwValue / 100) * viewportWidth;
          style.setProperty(property, pxValue + "px");
        }

        if (value.includes("vh")) {
          const vhValue = parseFloat(value);
          const pxHeightValue = (vhValue / 100) * viewportHeight;
          style.setProperty(property, pxHeightValue + "px");
        }
      }
    });
  }
}
