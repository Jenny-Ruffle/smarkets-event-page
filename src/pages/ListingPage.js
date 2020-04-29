import React from 'react'
import { createComponent } from 'react-fela'
import useFetch from '../utils/useFetch'
import ListingBlock from '../components/ListingBlock'
import { Heading, Paragraph } from '../components/Fonts'
import PageWrapper from '../components/PageWrapper'

const FlexContainer = createComponent(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth:'1024px',
    margin: '24px auto'
}), 'div')


const ListingPage = () => {
    const res = useFetch(
      "https://api.smarkets.com/v3/popular/event_ids/sport/football/"
    );
    return (
    <PageWrapper>
      <Heading> Upcoming & Live Games </Heading>
      <FlexContainer>
        {!res && <Paragraph>Loading</Paragraph>}
        {res && res.popular_event_ids.map((item, index) => <ListingBlock id={item} key={index}/>)}
      </FlexContainer>
    </PageWrapper>
    )
}

export default ListingPage
