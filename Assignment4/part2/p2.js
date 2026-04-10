//<!--
       // Name: Ayomide Akerele
       //file: index.html
       //date: March 20,2026
       // -->//
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Create image data array
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// the Base URL
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";


// Loop to create thumbnails
for (const image of images) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", baseURL + image.filename);
  newImage.setAttribute("alt", image.alt);
  newImage.setAttribute("tabindex", "0"); // makes it focusable

  thumbBar.appendChild(newImage);
  
  // Click event
  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  // Keyboard (Enter key)
  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// 4. Function to update main image
function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

// 5. Darken / Lighten button
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // Toggle class (clean one-line solution)
  btn.classList.toggle("dark");
});

