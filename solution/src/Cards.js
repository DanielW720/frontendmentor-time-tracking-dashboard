import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Cards({ data }) {
  const [interval, setInterval] = useState('weekly');

  const intervalClickHandler = interval => {
    setInterval(interval);
  }

  return (
    <Box sx={{
      padding: "0 2rem",
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        display: 'grid',
        gap: '1.5rem',
        minWidth: 250,
        maxWidth: 400,
        '@media (min-width: 700px)': {
          height: '450px',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          maxWidth: 1000
        }
      }}>
        <AvatarCard
          name={data.user.name}
          interval={interval}
          avatar={data.user.avatar}
          intervalClickHandler={(timeframe) => intervalClickHandler(timeframe)} />
        {
          data.data.map((item, idx) => <DataCard key={idx} item={item} interval={interval} />)
        }
      </Box>
    </Box>
  );
}

const DataCard = ({ item, interval }) => {
  const timeframe = {
    'daily': 'Day', 'weekly': 'Week', 'monthly': 'Month'
  }[interval];
  const colors = {
    Work: 'lightorange',
    Play: 'softblue',
    Study: 'lightred',
    Exercise: 'limegreen',
    Social: 'violet',
    'Self Care': 'softorange'
  };

  return (
    <Box sx={{
      height: '130px',
      position: 'relative',
      '@media (min-width: 700px)': {
        height: '100%'
      },
    }}>
      <Card sx={{
        bgcolor: `var(--${colors[item.title]})`,
        display: 'flex',
        justifyContent: 'end',
        borderRadius: 3,
        pr: '2rem',
        pb: '1rem',
        '@media (min-width: 700px)': {
          height: '40%'
        },
      }}>
        <Box sx={{
          width: '15%',
          '@media (min-width: 700px)': {
            width: '30%'
          },
        }}>
          <img src={item.icon} width='100%' alt="Items icon" />
        </Box>
      </Card>
      <Card sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "var(--darkblue)",
        borderRadius: 3,
        position: 'absolute',
        top: '25%',
        transition: 'background-color 0.3s',
        '&:hover': {
          bgcolor: 'var(--desaturatedblue)',
          cursor: 'pointer'
        },
        height: '100px',
        '@media (min-width: 700px)': {
          height: '80%',
          top: '20%',
        },
      }}>
        <Box sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          pr: '1rem',
          pl: '1rem',
          '@media (min-width: 700px)': {
            gridTemplateColumns: '3fr 1fr'
          },
        }}>
          <Typography fontWeight='500' color='white'>{item.title}</Typography>
          <Box textAlign='end'>
            <MoreHorizIcon sx={{
              color: 'var(--paleblue)',
              '&:hover': {
                color: 'white',
                transition: 'color 0.3s',
                cursor: 'pointer'
              },
            }} />
          </Box>
          <Typography fontSize='25px' fontWeight='300' color='white' sx={{
            '@media (min-width: 700px)': {
              fontSize: '35px'
            },
          }}>
            {item.timeframes[interval].current}hrs
          </Typography>
          <Typography fontSize='13px' textAlign='end' mt='0.5rem' sx={{
            '@media (min-width: 700px)': {
              gridColumn: '1 / 2',
              textAlign: 'start',
            },
          }}>
            {`Last ${timeframe} - ${item.timeframes[interval].previous}hrs`}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

const AvatarCard = ({ name, interval, avatar, intervalClickHandler }) => {
  const timeframes = ['daily', 'weekly', 'monthly'];

  return (
    <Box sx={{
      '@media (min-width: 700px)': {
        gridRow: '1 / 3',
        position: 'relative',
      }
    }}>
      <Card sx={{
        bgcolor: "var(--primaryblue)",
        display: 'flex',
        alignItems: 'center',
        p: '1.5rem 0 1.5rem 1rem',
        position: 'relative',
        bottom: -15,
        borderRadius: 3,
        '@media (min-width: 700px)': {
          m: 0, p: 0,
          bottom: 0,
          height: '65%',
          zIndex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          pl: '1rem',
        }
      }}>
        <Box sx={{
          marginLeft: '1.5rem',
          width: '20%',
          '@media (min-width: 700px)': {
            width: '40%',
            ml: '0.5rem'
          }
        }}>
          <img
            width='100%'
            src={avatar}
            alt={`User ${name}`}
            style={{
              border: '2px solid white',
              borderRadius: '50%',
            }} />
        </Box>
        <Box ml='1rem' sx={{
          '@media (min-width: 700px)': {
            mt: '2rem',
          }
        }}>
          <Typography fontFamily='Rubik' fontSize='13px'>
            Report for
          </Typography>
          <Typography fontSize='20px' color='white' sx={{
            fontSize: '28px',
          }}>
            {name}
          </Typography>
        </Box>
      </Card>
      <Card sx={{
        bgcolor: 'var(--darkblue)',
        height: '75px',
        borderRadius: 3,
        '@media (min-width: 700px)': {
          width: '100%',
          height: '45%',
          position: 'absolute',
          top: '55%',
        }
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '2rem',
          '@media (min-width: 700px)': {
            flexDirection: 'column',
            padding: '3.5rem 0 1rem 2rem',
          }
        }}>
          {
            timeframes.map((timeframe, idx) => {
              return (
                <Typography
                  variant='button'
                  onClick={() => intervalClickHandler(timeframe)}
                  key={idx}
                  fontSize='16px'
                  color={
                    timeframe === interval ? 'white' : 'var(--paleblue)'
                  } sx={{
                    fontWeight: 300,
                    textTransform: 'none',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: 'white',
                      cursor: 'pointer',
                    },
                    '@media (min-width: 700px)': {
                      marginTop: '1rem',
                    }
                  }}>
                  {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                </Typography>
              )
            })
          }
        </Box>
      </Card >
    </Box >
  );
}
