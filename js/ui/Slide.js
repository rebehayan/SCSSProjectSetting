export default function Slide() {
  // 슬라이드 기본실행
  const swiper = new Swiper(".future-relics__slide", {
    loop: true,
    pagination: {
      clickable: true,
      el: ".future-relics__paging",
    },
  });
}
