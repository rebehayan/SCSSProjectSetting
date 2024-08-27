import resizeMap from "./ui/ImageMap.js";
import Slide from "./ui/Slide.js";
import Include from "./ui/Include.js";
import Scroll from "./ui/Scroll.js";

// Include
Include("/pages/include/Header.html", ".header");
Include("/pages/include/Footer.html", ".footer");
Include("/pages/include/Megamenu.html", ".megamenu");

// 슬라이드
Slide();

// 이미지맵 반응형
window.onload = resizeMap;
window.onresize = resizeMap;

//스크롤
Scroll();
