let arr = [
  "https://i.pinimg.com/736x/04/d7/34/04d734b3df39ed6fd29f6a09eb3c7802.jpg",
  "https://i.pinimg.com/736x/c8/64/45/c8644530c68f21a9fe0b81ed2480a0b5.jpg",
  "https://i.pinimg.com/736x/2a/93/16/2a931632f866ed1eecf211ac7929f9a9.jpg",
  "https://i.pinimg.com/736x/8b/69/aa/8b69aad8511dc375fb5e18b2b95659b7.jpg",
  "https://i.pinimg.com/1200x/a2/dd/bf/a2ddbff133f0732346b4f893ca824fcf.jpg",
  "https://i.pinimg.com/1200x/48/94/3e/48943e6b386a91184c6c91c92f321e05.jpg",
  "https://i.pinimg.com/736x/9b/5b/0a/9b5b0a629e351e01162dc3f970843d6e.jpg",
  "https://i.pinimg.com/736x/04/d7/34/04d734b3df39ed6fd29f6a09eb3c7802.jpg",
];

let main = document.getElementById("main");

let s = "";

for (let i = 1; i <= 56; i++) {
  let r = Math.floor(Math.random() * arr.length);
  s += `<div class="frame">
            <img src="${arr[r]}">
          </div>`;
}

main.innerHTML = s;

let cursor = document.getElementById("cursor");

main.addEventListener("mousemove", function (cordinates) {
  cursor.style.top = cordinates.y + "px";
  cursor.style.left = cordinates.x + "px";
});

let imgs = document.querySelectorAll("img");

for (let img of imgs) {
  img.addEventListener("mouseenter", function () {
    this.style.width = "400px";
  });

  img.addEventListener("dblclick", function () {
    // `this` = clicked image
    let frame = this.parentElement; // get the parent .frame
    frame.style.width = "510px";
    frame.style.height = "600px";
  });

  img.addEventListener("mouseleave", function () {
    this.style.width = "93%";
    let frame = this.parentElement;
    frame.style.width = "170px";
    frame.style.height = "200px";
  });
}
