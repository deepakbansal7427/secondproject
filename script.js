 const box = document.getElementById("box");

  box.addEventListener("click", () => {
    // Generate random top and left positions
    const newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    // Move the box to new position
    box.style.top = newTop + "px";
    box.style.left = newLeft + "px";
  });
