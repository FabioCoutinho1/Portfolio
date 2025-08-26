const form = document.querySelector("form");
const nameInput = document.querySelector("#name__contact");
const emailInput = document.querySelector("#email__contact");
const messageInput = document.querySelector("#message__area");
const successMessage = document.querySelector(".success__message");
const progressBar = document.querySelector(".progress__bar");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      "https://sendemailformyportfolio.onrender.com/api/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    successMessage.style.opacity = "1";
    progressBar.style.animation = "slide 3s linear infinite";
    setTimeout(() => {
      successMessage.style.opacity = "0";
    }, 3000);
    form.reset();
  } catch (error) {
    console.error("Error sending email:", error);
    alert("There was an error sending your email. Please try again later.");
  }
});
