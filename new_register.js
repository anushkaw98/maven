// script.js

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const showRegisterForm = document.getElementById("showRegisterForm");
    const closePopup = document.getElementById("closePopup");
    const registerFormPopup = document.getElementById("registerFormPopup");
  
    registerBtn.addEventListener("click", function () {
      showPopup();
    });
  
    showRegisterForm.addEventListener("click", function () {
      showPopup();
    });
  
    closePopup.addEventListener("click", function () {
      hidePopup();
    });
  
    function showPopup() {
      registerFormPopup.style.display = "block";
    }
  
    function hidePopup() {
      registerFormPopup.style.display = "none";
    }
  });
  