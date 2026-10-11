document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic photo placeholder interaction
  const photoBlock = document.querySelector(".photo-placeholder");

  if (photoBlock) {
    // Scaling and color transition on hover
    photoBlock.addEventListener("mouseenter", () => {
      photoBlock.style.transform = "scale(1.04)";
      photoBlock.style.transition =
        "transform 0.3s ease, border-color 0.3s ease";
      photoBlock.style.borderColor = "#1e3d59"; /* Deep blue color */
    });

    // Reset styles on mouse leave
    photoBlock.addEventListener("mouseleave", () => {
      photoBlock.style.transform = "scale(1)";
      photoBlock.style.borderColor = "#ff7f50"; /* Original orange color */
    });
  }

  // 2. Automated smart greeting based on local time
  const textContainer = document.querySelector(".header-text");
  const greetingElement = document.createElement("p");

  const currentHour = new Date().getHours();
  let greetingMessage = "Welcome!";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good afternoon!";
  } else if (currentHour >= 18 && currentHour < 23) {
    greetingMessage = "Good evening!";
  } else {
    greetingMessage = "Good night!";
  }

  // Applying text and styles to the generated greeting
  greetingElement.textContent = `${greetingMessage} Thank you for visiting my resume.`;
  greetingElement.style.color = "#718096";
  greetingElement.style.fontSize = "0.95rem";
  greetingElement.style.marginTop = "8px";

  if (textContainer) {
    textContainer.appendChild(greetingElement);
  }
});
