import React from "react";
import { createComponent } from "react-fela";
import { Link } from 'react-router-dom'
import useFetch from "../../utils/useFetch";
import {Prefix, SmallHeading, Paragraph} from '../Fonts'
import EventContainer from '../EventContainer'

const ListingBlock = ({id}) => {
  const res = useFetch(
    `https://api.smarkets.com/v3/events/${id}/`
  );

  return (
    <EventContainer>
       {!res && <Paragraph>Loading</Paragraph> }
       {res && <>
          <Prefix>{res.events[0].state}</Prefix>
          <Link style={{ textDecoration: 'none' }} to={`/${id}`}>
            <SmallHeading>{res.events[0].name}</SmallHeading>
          </Link>
       </>}
    </EventContainer>
  );
};

export default ListingBlock;
