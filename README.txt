CAMPUSCARE - ATTRACTIVE STUDENT COMPLAINT PORTAL

1. Open script.js.
2. Replace PASTE_YOUR_N8N_WEBHOOK_URL_HERE with your n8n Webhook Production URL.
3. Activate the n8n workflow.
4. Open index.html, or run a local server:
   python -m http.server 5500
5. Visit http://localhost:5500

The frontend sends:
student_name
email
department
location
complaint

These match the fields in the n8n workflow you created.

If the browser reports CORS, use a local server and configure the webhook/CORS appropriately.
