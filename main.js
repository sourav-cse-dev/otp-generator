function tackleOTPBoxes() {
  const boxes = document.getElementById("otp-box-list-id");
  boxes.addEventListener("input", function (event) {
    const target = event.target;
    const value = target.value;
    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
  });
}

function generateOTP() {
  const generatedOTP = Math.floor(1000 + Math.random() * 9000);
  const otpElement = document.getElementById("generated-otp-id");
  otpElement.innerText = `Your OTP: ${generatedOTP}`;
}

function init() {
  console.log("JavaScript initialization done!!!");
  tackleOTPBoxes();
  setTimeout(generateOTP, 2000);
  validateOTP();
}

init();
