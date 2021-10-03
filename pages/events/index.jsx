import Layout from "../../components/shared/Layout";
import EventsHero from "../../components/events/Events";

import eventsData from "../../data/events";
import speakerData from "../../data/speakers";

const Events = ({ events, speakers }) => {
	return (
		<Layout>
			<EventsHero events={events} speakers={speakers} />
		</Layout>
	);
};

export default Events;

export async function getStaticProps() {
	return {
		props: { events: eventsData, speakers: speakerData },
	};
}
