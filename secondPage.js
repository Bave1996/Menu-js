const firstBtn = document.querySelector(".firstPositionBtn");
const secondBtn = document.querySelector(".secondPositionBtn");
const thirdBtn = document.querySelector(".thirdPositionBtn");
const fourthBtn = document.querySelector(".fourthPositionBtn");

const firstPosition = document.querySelector("#ft-position");
const secondPosition = document.querySelector("#sd-position");
const thirdPosition = document.querySelector("#td-position");
const fourthPosition = document.querySelector("#fth-position");

const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");
const id3 = document.getElementById("id3");
const id4 = document.getElementById("id4");

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
    id4.style.fontWeight = "";
    id4.style.textShadow = "";
    id4.style.textDecoration = "";

    if (firstBtn) {
        firstPosition.classList.remove("hidden");
        secondPosition.classList.add("hidden");
        thirdPosition.classList.add("hidden");
        fourthPosition.classList.add("hidden");
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
    id4.style.fontWeight = "";
    id4.style.textShadow = "";
    id4.style.textDecoration = "";

    if (secondBtn) {
        secondPosition.classList.remove("hidden");
        firstPosition.classList.add("hidden");
        thirdPosition.classList.add("hidden");
        fourthPosition.classList.add("hidden");
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
    id4.style.fontWeight = "";
    id4.style.textShadow = "";
    id4.style.textDecoration = "";

    if (thirdBtn) {
        thirdPosition.classList.remove("hidden");
        firstPosition.classList.add("hidden");
        secondPosition.classList.add("hidden");
        fourthPosition.classList.add("hidden");
    }
});

fourthBtn.addEventListener("click", function () {
    id4.style.fontWeight = "bold";
    id4.style.textShadow = "0 0 20px purple";
    id4.style.textDecoration = "underline";

    id3.style.fontWeight = "";
    id3.style.textDecoration = "";
    id3.style.textShadow = "";
    id2.style.fontWeight = "";
    id2.style.textShadow = "";
    id2.style.textDecoration = "";
    id1.style.fontWeight = "";
    id1.style.textShadow = "";
    id1.style.textDecoration = "";

    if (fourthBtn) {
        fourthPosition.classList.remove("hidden");
        firstPosition.classList.add("hidden");
        secondPosition.classList.add("hidden");
        thirdPosition.classList.add("hidden");
    }
});
