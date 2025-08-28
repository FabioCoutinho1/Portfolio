const form = document.querySelector("form");
const nameInput = document.querySelector("#name__contact");
const emailInput = document.querySelector("#email__contact");
const messageInput = document.querySelector("#message__area");
const successMessageEl = document.querySelector(".success__message");
const progressBarEl = document.querySelector(".progress__bar");
const errorMessageEl = document.querySelector(".trim__error");
const formInputsGroupEl = form.querySelector(".email__name");
const messageTextareaEl = form.querySelector("textarea");

const showError = () => {
  errorMessageEl.classList.remove("hiden");
  formInputsGroupEl.classList.add("input__error");
  messageTextareaEl.classList.add("textarea__error");
};

const clearError = () => {
  errorMessageEl.classList.add("hiden");
  formInputsGroupEl.classList.remove("input__error");
  messageTextareaEl.classList.remove("textarea__error");
};

const validForm = ({ name, email, message }) => {
  if (!name || !email || !message) {
    showError();
    return false;
  }
  clearError();
  return true;
};

const showSuccess = () => {
  timeProgressBar();
  setTimeout(() => {}, 3000);
};
const sendFormData = async (data) => {
  const response = await fetch(
    "https://sendemailformyportfolio.onrender.com/api/send-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fomrData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (!validForm(fomrData)) return;

  try {
    await sendFormData(fomrData);
    showSuccess();
    form.reset();
  } catch (error) {
    console.error("Error sending email:", error);
    alert("There was an error sending your email. Please try again later.");
  }
});

let time = 0;
let intervalId2;

const timeProgressBar = () => {
  intervalId2 = setInterval(() => {
    time++;
    successMessageEl.style.opacity = "1";
    progressBarEl.style.width = `${time}%`;

    if (time >= 100) {
      clearInterval(intervalId2);
      successMessageEl.style.opacity = "0";
      progressBarEl.style.width = `0%`;
      time = 0;
    }
  }, 30);
};
