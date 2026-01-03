let container = document.querySelector(".container");
let qrinput = document.querySelector("#text");
let generatebtn = document.querySelector("#generate");
let img = document.querySelector("#qr-image");
let previousvalue;
generatebtn.onclick = function () {
  let input = qrinput.value.trim();
  if (!input || input === previousvalue) {
    return;
  } else {
    previousvalue = input;
    generatebtn.innerText = "Generating QR Code...";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
    img.onload = function () {
      container.classList.add("active");
      generatebtn.innerText = "Generate QR Code";
    };
  }
};
