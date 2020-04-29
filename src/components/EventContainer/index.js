import { createComponent } from 'react-fela'

const EventContainer = createComponent(() => ({
    display: 'block',
    backgroundColor: '#7fad7f',
    width: '300px',
    height: 'auto',
    border: '5px solid #7fad7f',
    borderRadius: '4px',
    margin: "24px",
    padding: '18px'
  }), 
"div");
  
export default EventContainer