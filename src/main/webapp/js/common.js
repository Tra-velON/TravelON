/**
 * header
 */
fetch("include/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // header 로드 완료 후에 .menu 이벤트 등록
    const menuBtn = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    const menubar = document.querySelector(".menubar");

    // 메뉴버튼 클릭 시 menubar visible
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menubar.classList.add("active");
      });
    }

    // 메뉴버튼 클릭 시 menubar hidden
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        menubar.classList.remove("active");
      });
    }
  });

/**
 * footer
 */
fetch("include/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

/**
 * ScrollTop
 */
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const headerBottom = header.offsetTop + header.offsetHeight;
    if (window.scrollY > headerBottom) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 스크롤 올라간 후 버튼 숨기기
    setTimeout(() => {
      scrollTopBtn.classList.remove("show");
    }, 600);
  });
});