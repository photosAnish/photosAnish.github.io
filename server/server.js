const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

function formatDate(inputDate) {
  const date = new Date(inputDate);

  // Get day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Concatenate components to get the desired format
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/pictures", (req, res) => {
  const reactHtmlPath = path.join(__dirname, "../client/dist/index.html");
  reactHtmlContent = fs.readFileSync(reactHtmlPath, "utf-8");
  res.send(reactHtmlContent);
});

app.get("/random-image", (req, res) => {
  const imagesFolder = path.join(__dirname, "pictures");
  const imageFiles = fs.readdirSync(imagesFolder);
  var random= Math.floor(Math.random() * imageFiles.length)
  const randomImage = imageFiles[random];
  const imageStats = fs.statSync(path.join(__dirname, "pictures", randomImage));
  const inputDateString = imageStats.mtime;
  const formattedDate = formatDate(inputDateString); 
  res.json({ imageUrl: `/images/${randomImage}` , date:formattedDate});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
