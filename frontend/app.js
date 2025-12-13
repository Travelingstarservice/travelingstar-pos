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
