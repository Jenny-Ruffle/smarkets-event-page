import React from "react";
import { createComponent } from "react-fela";
import useFetch from "../utils/useFetch";

const flexContainer = () => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "24px 64px",
  "@media (max-width: 768px)": {
    margin: "24px",
  },
});

const FlexContainer = createComponent(flexContainer, "div");

const EventPage = () => {
  const res = useFetch(
    "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/"
  );
  console.log(res, res.popular_event_ids);
  return (
    <FlexContainer>
       <div> Event Page </div>
      {/* {data.map((item, index) => <div key={index}>{item}</div>)} */}
    </FlexContainer>
  );
};

export default EventPage;
