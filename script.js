function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const openLink = document.getElementById("certi");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-btn");
  const blurredBackground = document.createElement('span'); // Create blurred background element
  
  blurredBackground.classList.add('blurred-background'); // Add class for styling
  
  document.body.appendChild(blurredBackground); // Add blurred background to the body
  
  openLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    blurredBackground.style.display = "block"; // Show blurred background
    popup.style.display = "block"; // Make the popup visible
  });
  
  closeButton.addEventListener("click", function() {
    blurredBackground.style.display = "none"; // Hide blurred background
    popup.style.display = "none"; // Hide the popup
  });
  
//above code for mouseover func

//for popup view
