let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){ // loop through the list of lists
    list.addEventListener("dragstart", function(e){ // add a dragstart event listener
        let selected = e.target; // get the target element
        

        rightBox.addEventListener("dragover", function(e){ // add a dragover event listener
            e.preventDefault(); // prevent the default behavior
        });

        rightBox.addEventListener("drop", function(e){ // add a drop event listener
            rightBox.appendChild(selected); // append the selected element to the right box
            selected = null; // set the selected element to null
        });

        leftBox.addEventListener("dragover", function(e){ // add a dragover event listener
            e.preventDefault(); // prevent the default behavior
        });
        leftBox.addEventListener("drop", function(e){ // add a drop event listener
            leftBox.appendChild(selected);  // append the selected element to the left box
            selected = null; // set the selected element to null
        });
    })
}