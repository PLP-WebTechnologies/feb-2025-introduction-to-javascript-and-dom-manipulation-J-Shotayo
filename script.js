// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change Text Content Dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');
    
    textChangerBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text successfully changed using JavaScript!";
        dynamicText.style.color = "#e74c3c";
    });

    // 2. Modify CSS Styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    
    styleChangerBtn.addEventListener('click', function() {
        styleDemo.style.backgroundColor = "#3498db";
        styleDemo.style.color = "white";
        styleDemo.style.padding = "2rem";
        styleDemo.style.borderRadius = "10px";
        styleDemo.textContent = "Styles have been changed dynamically!";
    });

    // 3. Add/Remove Elements
    const addElementBtn = document.getElementById('add-element');
    const removeElementBtn = document.getElementById('remove-element');
    const elementContainer = document.getElementById('element-container');
    let elementCounter = 1;
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.textContent = `New Element ${elementCounter++}`;
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const lastElement = elementContainer.lastElementChild;
        if (lastElement && lastElement !== elementContainer.firstElementChild) {
            elementContainer.removeChild(lastElement);
        } else {
            alert("Can't remove the default element!");
        }
    });

    const mainTitle = document.getElementById('main-title');
    
    mainTitle.addEventListener('mouseenter', function() {
        this.textContent = "JavaScript is Fun!";
    });
    
    mainTitle.addEventListener('mouseleave', function() {
        this.textContent = "DOM Manipulation Demo";
    });
});