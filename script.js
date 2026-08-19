const N8N_WEBHOOK_URL = "https://madann8n.app.n8n.cloud/webhook-test/student-complaint";

const form = document.getElementById("complaintForm");
const button = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("spinner");
const message = document.getElementById("message");
const complaint = document.getElementById("complaint");
const counter = document.getElementById("counter");

complaint.addEventListener("input", () => {
  counter.textContent = `${complaint.value.length} / 500 characters`;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (N8N_WEBHOOK_URL === "https://madann8n.app.n8n.cloud/webhook/student-complaint") {
    showMessage("Add your n8n Webhook URL in script.js before testing.", "error");
    return;
  }

  const data = {
    student_name: document.getElementById("student_name").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value,
    location: document.getElementById("location").value.trim(),
    complaint: complaint.value.trim()
  };

  setLoading(true);
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    showMessage("✓ Complaint submitted successfully. Management has been notified for processing.", "success");
    form.reset();
    counter.textContent = "0 / 500 characters";
  } catch (err) {
    console.error(err);
    showMessage("Unable to submit right now. Check your n8n Webhook URL and CORS configuration.", "error");
  } finally {
    setLoading(false);
  }
});

function setLoading(active){
  button.disabled = active;
  btnText.textContent = active ? "Sending..." : "Submit complaint";
  spinner.classList.toggle("hidden", !active);
}
function showMessage(text, type){
  message.textContent = text;
  message.className = `message ${type}`;
  message.scrollIntoView({behavior:"smooth", block:"center"});
}
