 
<!-- Cash App payment button -->
<div id="cashapp-container"></div>
function showCashAppButton(showCashAppButton();
.cashapp-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #00c244;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s;
}

.cashapp-btn:hover {
  transform: scale(1.05);
}

  const container = document.getElementById("cashapp-container");
  if (!container) return;

  const cashAppTag = "$YourCashAppTag"; // Replace with your Cash App username

  container.innerHTML = `
    <a href="https://cash.app/${cashAppTag}" target="_blank" class="cashapp-btn">
      Pay with Cash App
    </a>
  `;

  // Optional: log click to backend
  container.querySelector("a").addEventListener("click", () => {
    axios.post("http://localhost:3000/api/log-visitor", {
      action: "cashapp_click",
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
  });
}

