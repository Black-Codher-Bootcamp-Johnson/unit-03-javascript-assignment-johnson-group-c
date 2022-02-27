//more info function

export function fullInfoButton(eachDate) {
    let timeline = document.querySelector(".timeline");
  
    // wrapper
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "card-wrapper");
    
  //container
    const containerDiv = document.createElement('div')
    containerDiv.id = 'modal-container'
    
    // image
    const modalImg = document.createElement('img')
    modalImg.id = 'modal-image'
    modalImg.setAttribute('src', eachDate.image)
    containerDiv.appendChild(modalImg)
    
    // date
    const modalDate = document.createElement('div')
    modalDate.id = 'modal-date'
    modalDate.textContent = eachDate.date
    containerDiv.appendChild(modalDate)
  
    // title
    const modalTitle = document.createElement('h1')
    modalTitle.id = 'modal-title'
    modalTitle.textContent = eachDate.title
    containerDiv.appendChild(modalTitle)
  
    //full description
    const modalDescription = document.createElement('p')
    modalDescription.id = 'modal-full-description'
    modalDescription.textContent = eachDate.fullDescription
    containerDiv.appendChild(modalDescription)
  
    
  
    // close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = 'X'
    closeBtn.id = "modal-close-button";
    containerDiv.appendChild(closeBtn)
  
    //wrapper.appendChild(containerDiv)
    document.body.appendChild(wrapper)
  
    closeBtn.addEventListener(
      "click",
      (e) => {
          e.preventDefault();
          
          containerDiv.remove(); 
      },
      false
    );
  
  
    
    timeline.appendChild(containerDiv)
    
  }