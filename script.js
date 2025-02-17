//your code here
 let draggedElement = null;

        document.querySelectorAll('.image').forEach(img => {
            img.addEventListener('dragstart', (e) => {
                draggedElement = e.target;
            });
            img.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            img.addEventListener('drop', (e) => {
                e.preventDefault();
                if (draggedElement !== e.target) {
                    let tempBg = draggedElement.style.backgroundImage;
                    draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                    e.target.style.backgroundImage = tempBg;
                }
            });
        });