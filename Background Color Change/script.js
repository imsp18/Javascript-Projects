//generating a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};


//changing the background color

let intervalID;

const startChangingColor = function() {
    const changeBg = function() {
        document.body.style.backgroundColor = randomColor();
    };

    if(!intervalID) {
        intervalID = setInterval(changeBg, 1000);
    }
};
const stopChangingColor = function() {
    clearInterval(intervalID);
    intervalID = null; //resetting the intervalID
};

//event listeners

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);