export default function handler(req, res) {
	res
		.status(200)
		.json({ uptime: process.uptime(), email: process.env.SMTP_PASSWORD });
}
