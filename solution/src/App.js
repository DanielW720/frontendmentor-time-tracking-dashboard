import './App.css';
import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Cards from './Cards';
import imageJeremy from './images/image-jeremy.png';
import iconWork from './images/icon-work.svg';
import iconPlay from './images/icon-play.svg';
import iconStudy from './images/icon-study.svg';
import iconExercise from './images/icon-exercise.svg';
import iconSocial from './images/icon-social.svg';
import iconSelfCare from './images/icon-self-care.svg';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'Roboto',
      '"Helvetica Neue"',
    ].join(','),
    fontSize: 18
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <div className="App">
          <main>
            <Box sx={{
              width: "100vw",
              marginTop: "3rem"
            }
            }>
              <Cards thisWeeksItems={listOfStuff} />
            </Box>
          </main>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

const listOfStuff = [
  {
    id: 1,
    user: "Jeremy Robson",
    avatar: imageJeremy,
    iconBackgroundColor: '--primaryblue',
    interval: 'Weekly'
  },
  {
    id: 2,
    title: "Work",
    hours: 32,
    hoursLastInterval: 36,
    icon: iconWork,
    iconBackgroundColor: '--lightorange',
    interval: 'Weekly'
  },
  {
    id: 3,
    title: "Play",
    hours: 10,
    hoursLastInterval: 8,
    icon: iconPlay,
    iconBackgroundColor: '--softblue',
    interval: 'Weekly'
  },
  {
    id: 4,
    title: "Study",
    hours: 4,
    hoursLastInterval: 7,
    icon: iconStudy,
    iconBackgroundColor: '--lightred',
    interval: 'Weekly'
  },
  {
    id: 5,
    title: "Excercise",
    hours: 4,
    hoursLastInterval: 5,
    icon: iconExercise,
    iconBackgroundColor: '--limegreen',
    interval: 'Weekly'
  },
  {
    id: 6,
    title: "Social",
    hours: 5,
    hoursLastInterval: 10,
    icon: iconSocial,
    iconBackgroundColor: '--violet',
    interval: 'Weekly'
  },
  {
    id: 7,
    title: "Self Care",
    hours: 2,
    hoursLastInterval: 2,
    icon: iconSelfCare,
    iconBackgroundColor: '--softorange',
    interval: 'Weekly'
  },
];

export default App;
