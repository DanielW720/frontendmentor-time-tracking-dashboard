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
    iconBackgroundColor: '--primaryblue'
  },
  {
    id: 2,
    title: "Work",
    hours: 32,
    hoursLastWeek: 36,
    icon: iconWork,
    iconBackgroundColor: '--lightorange'
  },
  {
    id: 3,
    title: "Play",
    hours: 10,
    hoursLastWeek: 8,
    icon: iconPlay,
    iconBackgroundColor: '--softblue'
  },
  {
    id: 4,
    title: "Study",
    hours: 4,
    hoursLastWeek: 7,
    icon: iconStudy,
    iconBackgroundColor: '--lightred'
  },
  {
    id: 5,
    title: "Excercise",
    hours: 4,
    hoursLastWeek: 5,
    icon: iconExercise,
    iconBackgroundColor: '--limegreen'
  },
  {
    id: 6,
    title: "Social",
    hours: 5,
    hoursLastWeek: 10,
    icon: iconSocial,
    iconBackgroundColor: '--violet'
  },
  {
    id: 7,
    title: "Self Care",
    hours: 2,
    hoursLastWeek: 2,
    icon: iconSelfCare,
    iconBackgroundColor: '--softorange'
  },
];

export default App;
