function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[72px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[72px]"),
      list.classList.remonve("opacity-100"));
}

function downloadPDF() {
  const pdfUrl = "../assets/documents/cv.pdf"; // Replace with the actual path to your PDF file
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "../assets/documents/cv.pdf"; // Specify the desired file name
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
