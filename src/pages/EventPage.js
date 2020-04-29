import React from "react";
import { Link } from 'react-router-dom'
import useFetch from "../utils/useFetch";
import { Heading } from '../components/Fonts'
import CenterContainer from '../components/CenterContainer'
import PageWrapper from '../components/PageWrapper'
import { SmallHeading, Paragraph, Prefix } from '../components/Fonts'
import EventContainer from '../components/EventContainer'

const getDate = (startDate) => {
  const date = startDate.split('-').reverse().join('/')
  return date
}

const getStartTime = (startTime) => {
  const timeString = startTime.split('T')[1]
  const time = timeString.slice(0, 5)
  return time
}

const EventPage = ({match}) => {
  const eventId = match.params.id 
  const res = useFetch(`https://api.smarkets.com/v3/events/${eventId}/`);
  const league = res && res.events[0].full_slug.split('/')[3]
  const startTime = res && getStartTime(res.events[0].start_datetime)
  const startDate= res && getDate(res.events[0].start_date)

  return (
    <PageWrapper>
      <Heading> Event Page </Heading>
      <CenterContainer>
        {!res && <div>Loading</div>}
        {res && <EventContainer>
          <Prefix>League: {league}</Prefix>
          <SmallHeading hover={false}>Game: {res.events[0].name}</SmallHeading>
          <Paragraph>Kickoff: {startTime}</Paragraph>
          <Paragraph>Game date: {startDate}</Paragraph>
        </EventContainer>}
      </CenterContainer>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <SmallHeading>Back</SmallHeading>
      </Link>
    </PageWrapper>
  );
};

export default EventPage;
