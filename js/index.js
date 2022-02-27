import { dates } from "./data.js";
import {fullInfoButton} from "./modules/fullInfoButton.js"

let timeline = document.querySelector(".timeline");


const bakeryName = document.createElement('h1')
    bakeryName.className = 'bakery-name'
    bakeryName.innerHTML = "Mayme's Bakery Timeline"
    timeline.appendChild(bakeryName)


//looping through array function
dates.forEach(eachDate => {
    
    
    const eachDiv = document.createElement("div");
    eachDiv.className = 'timeline-item';

    const header = document.createElement("h2");
    header.className = 'timeline-item-title';
    header.append(eachDate.title);

    const span = document.createElement("span");
    span.className = 'timeline-item-date';
    span.append(eachDate.date);

    const summary = document.createElement("p");
    summary.className = 'timeline-item-summary';
    summary.append(eachDate.summary);

    const circle = document.createElement("div");
    circle.setAttribute("class", "timeline-circle");
    circle.append(eachDate.date);

    const button = document.createElement("button");
    button.className = 'timeline-item-more-info';
    button.innerHTML = 'click for more..';


    eachDiv.appendChild(header)
    eachDiv.appendChild(span)
    eachDiv.appendChild(summary)
    eachDiv.appendChild(circle)
    eachDiv.appendChild(button)
    button.addEventListener("click", (e) => {
                  e.preventDefault();
                  fullInfoButton(eachDate)
                },false);
    
    timeline.appendChild(eachDiv)
})












