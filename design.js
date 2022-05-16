const drop = document.querySelector(".drop");
const input = document.querySelector(".drop input");
const text = document.querySelector(".text");
const progress = document.querySelector(".progress");

let files = [];

input.addEventListener("change",() {
    drop.style.display = "none";
    upload()
})
drop.addEventListener("dragover",(e) {
    e.preventDefault();
    text.innerHTML = "Release your mouse to drop";
    drop.classList.add("active");
})

drop.addEventListener("dragleave",(e) {
    e.preventDefault();
    text.innerHTML = "You will become a senior developer one day";
    drop.classList.remove("active");
})

drop.addEventListener("dragover",(e) {
    e.preventDefault();
    files = e.dataTransfer.files;
    drop.style.display = "none";
    upload();
});

//upload logic
function upload(){
    // fake upload logic
    let intervalCount = 0.25
    progress.style.display ="block"
    progress.style.width = `${20 * intervalCount}%`;
    const interval = setInterval()  {
        intervalCount += 0.25;
        progress.style.width = `${20 * intervalCount}%`
        if ( intervalCount = 5){
            clearInterval(interval);
        }
    } , 100);
}
