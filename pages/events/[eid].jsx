import eventsData from "../../data/events";
import speakers from "../../data/speakers";

import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import EventDetails from "../../components/details/EventDetails";

const EventDetailsPage = ({ event }) => {
	return (
		<>
			<Header />
			<EventDetails event={event} />
			<Footer />
		</>
	);
};

export default EventDetailsPage;

export async function getStaticProps(context) {
	const event = eventsData.find((event) => event.id === context.params.eid);
	const speaker = speakers.find((speaker) => speaker.eid === event.id);
	const position = speakers.findIndex((speaker) => speaker.eid === event.id);
	return {
		props: { event: { ...event, speaker, position } },
	};
}
export async function getStaticPaths() {
	const paths = eventsData.map((event) => ({ params: { eid: event.id } }));
	return {
		paths,
		fallback: false,
	};
}
