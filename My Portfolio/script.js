document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const contactInfo = document.getElementById("contact-info");

  toggleBtn.addEventListener("click", () => {
    const isVisible = contactInfo.style.display === "block";

    contactInfo.style.display = isVisible ? "none" : "block";
    toggleBtn.textContent = isVisible ? "Show Contact Info" : "Hide Contact Info";
  });
});
