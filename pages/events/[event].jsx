import { useRouter } from "next/router";

const EventDetails = () => {
	const router = useRouter();
	const { event } = router.query;

	return <main>Event: {event}</main>;
};

export default EventDetails;
