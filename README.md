# Smarkets Event Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| Route | Content                                         |
| ----- | ----------------------------------------------- |
| /     | Main listing page with popular Football matches |
| /:id  | Event details                                   |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## The API

For the popular event IDs:
https://api.smarkets.com/v3/popular/event_ids/sport/%3Csport-name%3E/
(In the project the call points to football as the sport)

For the Event info per ID:
https://api.smarkets.com/v3/events/%3Cevent_id%3E

## Screenshots of the Styling

Event listings:
![Image alt text](/static/images/event-listings.png "Event listings page")

Event details:
![Image alt text](/static/images/event-details.png "Event details page")
