import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
    address: "somer address 1, 1234 some street",
    description: "This the first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://www.movie-locations.com/movies/c/Casino-Royale-Villa-La-Gaeta.jpg",
    address: "somer address 2, 1234 second street",
    description: "This the second meetup",
  },
];

function HomePage() {
  return <MeetUpList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
