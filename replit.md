# Replit setup

## Run

- Runtime: Node.js 20
- Install dependencies: `npm install`
- Start the web app: `npm start`
- The Express server listens on `process.env.PORT`, defaulting to port 5000 for Replit Preview.

## Optional email configuration

The public pages work without email configuration. Quote, booking, rating, and feedback submissions use Nodemailer and require these environment secrets:

- `host`: SMTP server hostname
- `nm_port`: SMTP server port
- `user`: SMTP username and message recipient
- `pass`: SMTP password

Add these through Replit Secrets rather than committing them to the repository.