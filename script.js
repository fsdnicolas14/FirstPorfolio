// ---------------------
// Email Copy Function
// ---------------------
function copyEmail(event) {
  const email = "va.alpamaureen@gmail.com";
  const button = event.target;
  const originalText = button.textContent;

  navigator.clipboard
    .writeText(email)
    .then(() => {
      button.textContent = "Copied!";
      button.style.backgroundColor = "#4CAF50";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = "";
      }, 2000);
    })
    .catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
}

// ---------------------
// Modal Image Viewer
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-image img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.className = "image-modal";
      modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".modal-close").onclick = () => modal.remove();
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };
    });
  });

  // ---------------------
  // Clickable Service Tags
  // ---------------------
  const tags = document.querySelectorAll(".service-tag");
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("selected-tag");
    });
  });

  // ---------------------
  // Smooth Scrolling for Navigation
  // ---------------------
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
