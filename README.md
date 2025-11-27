JSON Server DBs for Assignment Q1..Q6
Files included (one db.json per question):
- q1_products_db.json
- q2_employees_db.json
- q3_tasks_db.json
- q4_multiapi_db.json
- q5_timetable_db.json
- q6_users_db.json

Suggested commands to run each on a different port (requires json-server installed globally):
json-server --watch /mnt/data/json_server_dbs/q1_products_db.json --port 3001
json-server --watch /mnt/data/json_server_dbs/q2_employees_db.json --port 3002
json-server --watch /mnt/data/json_server_dbs/q3_tasks_db.json --port 3003
json-server --watch /mnt/data/json_server_dbs/q4_multiapi_db.json --port 3004
json-server --watch /mnt/data/json_server_dbs/q5_timetable_db.json --port 3005
json-server --watch /mnt/data/json_server_dbs/q6_users_db.json --port 3006

Notes:
- Each file exposes only the endpoints present in that JSON file (e.g., q1 products available at /products).
- Use the specified port when making API calls from your frontend to ensure isolation.
Original assignment PDF path: /mnt/data/Submission of APIs and Endpoints.pdf
