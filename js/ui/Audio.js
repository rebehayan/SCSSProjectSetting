export default function AudioControls() {
  const playToggle = document.querySelectorAll(".toggle-audio");

  playToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const audio = toggle.nextElementSibling;
      if (audio.paused) {
        audio.play();
        toggle.classList.remove("ico4");
        toggle.classList.add("ico5");
      } else {
        audio.pause();
        toggle.classList.remove("ico5");
        toggle.classList.add("ico4");
      }
    });
  });

  const observer = new MutationObserver(() => {
    const playToggle = document.querySelectorAll(".toggle-audio");
    playToggle.forEach((toggle) => {
      toggle.removeEventListener("click", handleAudioToggle);
      toggle.addEventListener("click", handleAudioToggle);
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  const handleAudioToggle = (event) => {
    const toggle = event.currentTarget;
    const audio = toggle.nextElementSibling;
    if (audio.paused) {
      audio.play();
      toggle.classList.remove("ico4");
      toggle.classList.add("ico5");
    } else {
      audio.pause();
      toggle.classList.remove("ico5");
      toggle.classList.add("ico4");
    }
  };
}
