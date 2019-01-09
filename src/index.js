const button = document.createElement("button");
const [a, b] = 1;
console.log(a, b);

button.innerText = "Click";

button.onclick = () => {
    System.import("./image_helper.js")
        .then(module => {
            console.log(module);
            module.default();
        })
};

document.body.appendChild(button);