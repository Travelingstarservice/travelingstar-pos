cd ~/Documents/GitHub/travelingstar-POs 
nano frontend/app.js 
const res = await fetch(" 
https://travelingstar-pos-backend-repo.onrender.co$ 
const res = await fetch("https://travelingstar-pos-backend.onrender.com"); 

document.getElementById("testBtn").addEventListener("click", async () => {
  const responseDiv = document.getElementById("response");
  try {
    // Replace the URL below with your actual Render backend URL
    const res = await fetch("https://travelingstar-pos-backend-repo.onrender.com/api/test");
    const data = await res.json(); 
    responseDiv.innerText = JSON.stringify(data);
  } catch (err) {
    responseDiv.innerText = "Error connecting to backend";
    console.error(err);
  }
});

