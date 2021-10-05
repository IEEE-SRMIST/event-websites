export default async (req, res) => {
	if (req.method === "POST") {
		res.status(200).json({ message: "Not implemented" });
	} else {
		res.status(404).json({ message: `Cannot ${req.method} ${req.url}` });
	}
};
