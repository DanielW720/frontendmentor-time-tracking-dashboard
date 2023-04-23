import { Box, Card, Typography } from '@mui/material';
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Cards({ thisWeeksItems }) {
  const items = thisWeeksItems;
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
          height: '400px',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          maxWidth: 1300
        }
      }} >
        {items.map((item, idx) =>
          item.user === undefined ?
            <DataCard item={item} key={idx} /> :
            <AvatarCard item={item} key={idx} />
        )}
      </Box>
    </Box>
  );
}

const DataCard = ({ item }) => {
  const interval = {
    'Daily': 'Day', 'Weekly': 'Week', 'Monthly': 'Month'
  }[item.interval];

  return (
    <Box sx={{
      height: '130px',
      position: 'relative',
      '@media (min-width: 700px)': {
        height: '100%'
      },
    }}>
      <Card sx={{
        bgcolor: `var(${item.iconBackgroundColor})`,
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
        height: '100px',
        p: '0 1.5rem',
        '@media (min-width: 700px)': {
          height: '80%',
          top: '20%'
        },
      }}>
        <Box>
          <Typography fontWeight='500' color='white'>
            {item.title}
          </Typography>
          <Typography fontSize='25px' fontWeight='300'>
            {item.hours}hrs
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <MoreHorizIcon sx={{
            color: 'var(--paleblue)',
            alignSelf: 'end',
            mb: '0.5rem'
          }} />
          <Typography fontSize='13px' mb='0.4rem' ml='0.4rem'>
            {`Last ${interval} - ${item.hoursLastInterval}hrs`}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

const AvatarCard = ({ item }) => {
  const intervals = ['Daily', 'Weekly', 'Monthly'];

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
            src={item.avatar}
            alt={`User ${item.user}`}
            style={{
              border: '2px solid white',
              borderRadius: '50%',
            }} />
        </Box>
        <Box ml='1rem' sx={{
          '@media (min-width: 700px)': {
            mt: '2rem',
            ml: '0.5rem'
          }
        }}>
          <Typography fontFamily='Rubik' fontSize='13px'>
            Report for
          </Typography>
          <Typography fontSize='20px' color='white' sx={{
            fontSize: '28px',
            mr: '1rem',
          }}>
            {item.user}
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
            padding: '3.3rem 0 1rem 1rem',
          }
        }}>
          {
            intervals.map((interval, idx) => {
              return (
                <Typography key={idx} fontSize='16px' color={
                  interval === item.interval ? 'white' : ''
                } sx={{
                  '@media (min-width: 700px)': {
                    marginTop: '0.5rem',
                  }
                }}>
                  {interval}
                </Typography>
              )
            })
          }
        </Box>
      </Card >
    </Box >
  );
}
