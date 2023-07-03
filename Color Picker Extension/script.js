const colorPickerBtn = document.querySelector("#color-picker");
const colorList = document.querySelector(".all-colors");
const clearAll = document.querySelector(".clear-all");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors")) || [];

const copyColor = elem => {
   navigator.clipboard.writeText(elem.dataset.color);
   elem.innerText = "Copied!";
   setTimeout(() => elem.innerText = elem.dataset.color, 1000); 
}

const showColors = () => {
    if(!pickedColors.length) return; //if no colors are picked, return from the function 
    colorList.innerHTML = pickedColors.map(color => `
    <li class="color">
        <span class="rect" style="background: ${color}"></span>
        <span class="value" data-color="${color}">${color}</span>
    </li>
    `).join(""); //generating list of picked colors and adding it to the colorList 
    document.querySelector(".picked-colors").classList.remove("hide");

    //Adding event listener to each color to copy the color value to clipboard when clicked on it 
    document.querySelectorAll(".color").forEach(li => {
        li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
    });
}

const activateEyeDropper = async () => {
    try {
        //Opening the eye dropper and getting the selected color
        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);

        pickedColors.push(sRGBHex);
        localStorage.setItem("pickedColors", JSON.stringify(pickedColors));
        showColors();
    } catch (error) {
        console.log(error);
    }
}

//Clearing all the picked colors from the local storage and the UI  
const clearAllColors = () => {
    pickedColors.length = 0;
    localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
    document.querySelector(".picked-colors").classList.add("hide");
}

clearAll.addEventListener("click",clearAllColors)
colorPickerBtn.addEventListener("click", activateEyeDropper);
