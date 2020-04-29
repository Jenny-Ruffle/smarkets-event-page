import { createComponent } from 'react-fela'

export const Heading = createComponent(() => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '36px/40px "Abril Fatface", cursive',
}), 'h1')


export const SmallHeading = createComponent(({hover=true}) => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '22px/26px "Abril Fatface", cursive',
    textDecoration: 'none',
    ':hover': {
        color: hover ? '#3c4a3c' : 'black',
        cursor: hover ? 'pointer' : 'default'}
}), 'h2', ['onClick', 'href'])


export const Paragraph = createComponent(() => ({
    display: 'block',
    textAlign: 'center',
    margin: 0,
    color: 'black',
    paddingBottom: '16px',
    font: '16px/20px "Raleway", sans-serif'
}), 'p')


export const Prefix = createComponent(() => ({
    display: 'block',
    textAlign: 'center',
    letterSpacing: '2px',
    margin: 0,
    paddingBottom: '16px',
    color: 'black',
    textTransform: 'uppercase',
    font: '10px/16px "Raleway", sans-serif',
}), 'p')