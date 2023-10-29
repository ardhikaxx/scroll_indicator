const progressbar = document.querySelector(".progress-bar");
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrolled = (scrollTop / height) * 100;
    progressbar.style.width = `${scrolled}%`;
});