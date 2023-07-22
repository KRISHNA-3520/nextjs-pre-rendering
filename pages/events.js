import { useRouter } from "next/router";
import { useState } from "react";

function EVENTLIST({ eventList }) {
  const [events, setEvent] = useState(eventList);
  const router = useRouter();

  const fetchEvent = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvent(data)
    router.push('/events?category=sports',undefined,{shallow:true})
  };
  return (
    <>
      <button onClick={fetchEvent}>SPORTS EVENT</button>
      <h1>Event List</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <p>
              {event.id} | {event.title} | {event.category} |{event.date}
            </p>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EVENTLIST;

export async function getServerSideProps(context) {
  const {query}=context
  const {category}=query
  const queryString = category?'category=sports':''
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
