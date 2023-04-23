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
              marginTop: "3rem",
              marginBottom: '3rem'
            }
            }>
              <Cards data={data} />
            </Box>
          </main>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

const data = {
  user: {
    name: 'Jeremy Robson',
    avatar: imageJeremy
  },
  data: [
    {
      "title": "Work",
      'icon': iconWork,
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      'icon': iconPlay,
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      'icon': iconStudy,
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      'icon': iconExercise,
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      'icon': iconSocial,
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      'icon': iconSelfCare,
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
};

export default App;
