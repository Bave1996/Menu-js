const firstBtn = document.querySelector(".firstPositionBtn");
const secondBtn = document.querySelector(".secondPositionBtn");
const thirdBtn = document.querySelector(".thirdPositionBtn");

const firstPosition = document.querySelector("#ft-position");
const secondPosition = document.querySelector("#sd-position");
const thirdPosition = document.querySelector("#td-position");

const id1 = document.querySelector("#id1");
const id2 = document.querySelector("#id2");
const id3 = document.querySelector("#id3");

firstBtn.addEventListener("click", function () {
    id1.style.fontWeight = "bold";
    id1.style.textShadow = "0 0 20px purple";
    id1.style.textDecoration = "underline";

    id3.style.fontWeight = "";
    id3.style.textDecoration = "";
    id3.style.textShadow = "";
    id2.style.fontWeight = "";
    id2.style.textShadow = "";
    id2.style.textDecoration = "";

    if (firstBtn) {
        firstPosition.classList.remove("hidden");
        secondPosition.classList.add("hidden");
        thirdPosition.classList.add("hidden");
    }
});

secondBtn.addEventListener("click", function () {
    id2.style.fontWeight = "bold";
    id2.style.textShadow = "0 0 20px purple";
    id2.style.textDecoration = "underline";

    id3.style.fontWeight = "";
    id3.style.textDecoration = "";
    id3.style.textShadow = "";
    id1.style.fontWeight = "";
    id1.style.textShadow = "";
    id1.style.textDecoration = "";

    if (secondBtn) {
        secondPosition.classList.remove("hidden");
        firstPosition.classList.add("hidden");
        thirdPosition.classList.add("hidden");
    }
});

thirdBtn.addEventListener("click", function () {
    id3.style.fontWeight = "bold";
    id3.style.textShadow = "0 0 20px purple";
    id3.style.textDecoration = "underline";

    id1.style.fontWeight = "";
    id1.style.textDecoration = "";
    id1.style.textShadow = "";
    id2.style.fontWeight = "";
    id2.style.textShadow = "";
    id2.style.textDecoration = "";

    if (thirdBtn) {
        thirdPosition.classList.remove("hidden");
        firstPosition.classList.add("hidden");
        secondPosition.classList.add("hidden");
    }
});
