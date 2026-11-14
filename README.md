# City Heart Hospital Portal

## Run locally

1. Install MongoDB Community Server and make sure it is running, or set `MONGODB_URI` in `.env` to a MongoDB Atlas connection string.
2. Set `DOCTOR_PASSWORD` in `.env` to a strong password. The configured doctor account is created the first time the backend connects to MongoDB.
3. Install dependencies with `npm install`.
4. Start the API and React development server together with `npm run dev`.
5. Open `http://localhost:5173`.

The API listens on port `5000`; Vite proxies `/api` requests to it. `npm start` starts only the API server. If Atlas SRV DNS lookups fail with `ECONNREFUSED`, optionally set `MONGODB_DNS_SERVERS=8.8.8.8,1.1.1.1` in `.env`; otherwise leave this setting blank.

GitHub Pages is configured to publish the frontend automatically from the `main` branch via GitHub Actions. Pages serves only static frontend files; deploy the Express API separately and configure its URL before using authentication or database-backed features on the public site.

Patient accounts use generated `CHH-######` IDs. Passwords are hashed before they are stored. Patient records, uploaded reports, and doctor recommendations are stored in MongoDB. Authenticated API requests use short-lived bearer tokens.

The `.env` file is local and ignored by Git. Use `.env.example` as the configuration template and never commit real passwords, database credentials, or signing secrets.

This project is a development prototype. Before using real patient data, add production-grade access controls, secure cookie/session handling, audit logging, backups, transport security, and a privacy/compliance review.
