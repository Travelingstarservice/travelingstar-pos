
nano create_frontend.sh

nano create_frontend.sh
#!/bin/bash

# Remove any incorrectly named files
rm -f "index.htmlnano app.jsnano styles.css"

# Create index.html
cat > index.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TravelingStar POS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>TravelingStar POS</h1>
  <div id="app">
    <button id="testBtn">Check Backend</button>
    <div id="response"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>
EOL

# Create app.js
cat > app.js <<EOL
document.getElementById("testBtn").addEventListener("click", async () => {
  const responseDiv = document.getElementById("response");
  try {
    const res = await fetch("https://travelingstar-pos-backend.onrender.com");
    const data = await res.text();
    responseDiv.innerText = data;
  } catch (err) {
    responseDiv.innerText = "Error connecting to backend";
    console.error(err);
  }
});
EOL

# Create styles.css
cat > styles.css <<EOL
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
}

#app {
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
EOL
#!/bin/bash

# Remove any incorrectly named files
rm -f "index.htmlnano app.jsnano styles.css"

# Create index.html
cat > index.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TravelingStar POS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>TravelingStar POS</h1>
  <div id="app">
    <button id="testBtn">Check Backend</button>
    <div id="response"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>
EOL

# Create app.js
cat > app.js <<EOL
document.getElementById("testBtn").addEventListener("click", async () => {
  const responseDiv = document.getElementById("response");
  try {
    const res = await fetch("https://travelingstar-pos-backend.onrender.com");
    const data = await res.text();
    responseDiv.innerText = data;
  } catch (err) {
    responseDiv.innerText = "Error connecting to backend";
    console.error(err);
  }
});
EOL

# Create styles.css
cat > styles.css <<EOL
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
}

#app {
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
EOL

