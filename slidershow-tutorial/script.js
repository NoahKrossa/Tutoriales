const imgList = document.querySelectorAll("img");
let imgPosition = 0;

function previous() {
  if (imgPosition == 0) return;
  --imgPosition;
  console.log(imgPosition)
  move(imgPosition);

}

function next() {
  if (imgPosition == imgList.length - 1) return;
  imgPosition++;
  console.log(imgPosition)
  move(imgPosition);
}

function move(imgPosition) {
  let translate = imgPosition * -100;
  imgList.forEach(function (img) {
    img.style.transform = "translateX(" + translate + "%)";
  });
}
