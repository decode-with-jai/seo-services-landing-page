const REDIRECT_PAGE_URL = "https://your-seo-service-link.com"; // Edit this link
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

let silentRedirect;

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

function showOfferPopup() {
  if (!popupOverlay) return;
  popupOverlay.classList.add("active");
  popupOverlay.setAttribute("aria-hidden", "false");

  silentRedirect = setTimeout(() => {
    if (REDIRECT_PAGE_URL && REDIRECT_PAGE_URL !== "https://your-seo-service-link.com") {
      window.location.href = REDIRECT_PAGE_URL;
    }
  }, 8000);
}

function hideOfferPopup() {
  if (!popupOverlay) return;
  popupOverlay.classList.remove("active");
  popupOverlay.setAttribute("aria-hidden", "true");
  if (silentRedirect) clearTimeout(silentRedirect);
}

window.addEventListener("load", () => {
  setTimeout(showOfferPopup, 10000);
});

if (closePopup) {
  closePopup.addEventListener("click", hideOfferPopup);
}

if (popupOverlay) {
  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      hideOfferPopup();
    }
  });
}
