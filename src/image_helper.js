require("../styles/image_helper.css");
const big = require("../assets/big.jpg");
const small = require("../assets/face2.jpg");

export default () => {
    const img = document.createElement("img");

    img.src = small;

    const bigimg = document.createElement("img");

    bigimg.src = big;

    document.body.appendChild(img);
    document.body.appendChild(bigimg);
}