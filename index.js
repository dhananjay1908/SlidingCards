var boxes = document.querySelectorAll(".row");
for (var i = 0; i < boxes.length; i++) {

    const box = boxes[i];
    box.addEventListener("click", function() {
        for (var j = 0; j < boxes.length; j++) {
            const bomx = boxes[j];
            bomx.classList.remove("expand");
        }
        box.classList.add("expand");
    });


}