const colorPickerBtn = document.querySelector("#color-picker");
const colorList = document.querySelector(".all-colors");
const pickedColors = [];

const showColors = () => {
    colorList.innerHTML = pickedColors.map(color => `
    <li class="color">
        <span class="rect" style="background: ${color}"></span>
        <span class="value">${color}</span>
    </li>
    `).join(""); //generating list of picked colors and adding it to the colorList 
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

colorPickerBtn.addEventListener("click", activateEyeDropper);
