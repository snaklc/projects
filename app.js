

let gizliAlan = document.querySelector(".gizli-alan");
let moreButton = document.querySelector('.more');
let horizontalLine = document.querySelector(".horizontal-line");

let modalKayit = document.getElementById("myModal");
let modalOturum = document.getElementById("myModal2");
let registerButton = document.querySelector("#register-button");
let loginButton = document.querySelector("#login-button");
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];


let visibleIcon = document.getElementsByClassName("visible-icon")[0];
let visibleIcon2 = document.getElementsByClassName("visible-icon")[1];
let visibleIcon3 = document.getElementsByClassName("visible-icon")[2];

let gizliImage = document.getElementsByClassName("gizli-icon")[0];
let gizliImage2 = document.getElementsByClassName("gizli-icon")[1];
let gizliImage3 = document.getElementsByClassName("gizli-icon")[2];

let inputPassword = document.getElementsByClassName("password")[0];
let inputPassword2 = document.getElementsByClassName("password")[1];
let inputPassword3 = document.getElementsByClassName("password")[2];

let oturumAcButton = document.getElementsByClassName("oturum-ac")[0];
let oturumAcButton2 = document.getElementsByClassName("oturum-ac")[1];
let kayitOlButon = document.getElementsByClassName("kayit-ol")[0];
let kayitOlButon2 = document.getElementsByClassName("kayit-ol")[1];

let daraltButton = document.querySelector(".collapse-button");
let channelNames = document.querySelector(".channel-names");

let userIcon = document.querySelector("#user-icon");
let settings = document.querySelector(".settings");

let switchButton = document.querySelector(".tw-toggle");
let body = document.querySelector("body");
let topnav = document.querySelector(".topnav");
let leftContainer = document.querySelector(".left-container");


//DAHA FAZLA GÖSTER BUTON
moreButton.addEventListener("click", function () {
  gizliAlan.style.display = "flex";
  moreButton.style.display = "none";
  horizontalLine.style.width = "100%";

});



//MODAL REGISTER


registerButton.onclick = function () {
  modalKayit.style.display = "block";
}

span.onclick = function () {
  modalKayit.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modalKayit) {
    modalKayit.style.display = "none";
  }
  if (event.target == modalOturum) {
    modalOturum.style.display = "none";
  }
}

//MODAL LOGIN

loginButton.onclick = function () {
  modalOturum.style.display = "block";
}

span2.onclick = function () {
  modalOturum.style.display = "none";
}



//EYE ICON OPEN-CLOSE
visibleIcon.addEventListener("click", function () {
  inputPassword.type = "text";
  gizliImage.style.display = "flex";
  visibleIcon.style.display = "none";
});

gizliImage.addEventListener("click", function () {
  inputPassword.type = "password";
  visibleIcon.style.display = "flex";
  gizliImage.style.display = "none";

});

visibleIcon2.addEventListener("click", function () {
  inputPassword2.type = "text";
  gizliImage2.style.display = "flex";
  visibleIcon2.style.display = "none";
});

gizliImage2.addEventListener("click", function () {
  inputPassword2.type = "password";
  visibleIcon2.style.display = "flex";
  gizliImage2.style.display = "none";

});

visibleIcon3.addEventListener("click", function () {
  inputPassword3.type = "text";
  gizliImage3.style.display = "flex";
  visibleIcon3.style.display = "none";
});

gizliImage3.addEventListener("click", function () {
  inputPassword3.type = "password";
  visibleIcon3.style.display = "flex";
  gizliImage3.style.display = "none";

});



oturumAcButton.addEventListener("click", function () {
  modalOturum.style.display = "block";
  modalKayit.style.display = "none";

});

oturumAcButton2.addEventListener("click", function () {
  modalOturum.style.display = "block";
  modalKayit.style.display = "none";


});

kayitOlButon.addEventListener("click", function () {
  modalKayit.style.display = "block";
  modalOturum.style.display = "none";
});

kayitOlButon2.addEventListener("click", function () {
  modalKayit.style.display = "block";
  modalOturum.style.display = "none";
});


daraltButton.addEventListener("click", function () {
  channelNames.style.display = "none";
});

userIcon.addEventListener("click", function () {
  if(settings.style.display === "none")
   settings.style.display = "flex";
   else{
    settings.style.display = "none";
   }
});

switchButton.addEventListener("click", function(){
   body.classList.add("dark-mode");
   topnav.classList.add("dark-mode");
leftContainer.classList.add("dark-mode");
});