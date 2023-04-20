import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Cards({ thisWeeksItems }) {
  const items = thisWeeksItems;

  const avatarCard = (item) => {
    return (
      <Grid item xs={12}>
        <Card sx={{
          bgcolor: "var(--primaryblue)",
          display: 'flex',
          alignItems: 'center',
          p: '1.5rem 0',
          position: 'relative',
          bottom: -15,
          borderRadius: 3
        }}>
          <img
            width='20%'
            src={item.avatar}
            alt={`Image of user ${item.user}`}
            style={{
              border: '2px solid white',
              borderRadius: '50%',
              marginLeft: '1.5rem'
            }} />
          <Box ml='1rem' >
            <Typography fontFamily='Rubik' fontSize='13px'>Report for</Typography>
            <Typography fontSize='20px'>{item.user}</Typography>
          </Box>
        </Card>
        <Card sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          bgcolor: 'var(--darkblue)',
          height: '75px',
          p: '1rem 0',
          borderRadius: 3
        }}>
          <Typography>Daily</Typography>
          <Typography>Weekly</Typography>
          <Typography>Monthly</Typography>
        </Card>
      </Grid>
    );
  }

  const dataCard = (item) => {
    return (
      <Grid key={item.id} item xs={12}>

        {/* Height: 130px because bottom card has top: 30px and height: 100px */}
        <Box position='relative' height='130px'>
          {/* Card with icon behind card with info */}
          <Card sx={{
            bgcolor: `var(${item.iconBackgroundColor})`,
            display: 'flex',
            justifyContent: 'end',
            borderRadius: 3,
            pr: '1rem',
            pb: '1rem',
          }}>
            <img src={item.icon} width="15%" />
          </Card>
          {/* Card with info */}
          <Card sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: "var(--darkblue)",
            borderRadius: 3,
            position: 'absolute',
            top: '30px',
            height: '100px',
            p: '0 1.5rem'
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
              display: 'flex', flexDirection: 'column'
            }}>
              <MoreHorizIcon sx={{
                color: 'var(--paleblue)', alignSelf: 'end', mb: '0.5rem'
              }} />
              <Typography fontSize='13px' mb='0.4rem' ml='0.4rem'>
                Last Week - {item.hoursLastWeek}hrs
              </Typography>
            </Box>
          </Card>
        </Box>

      </Grid>
    );
  }

  return (
    <Box sx={{ padding: "0 2rem", margin: '0 0 2rem 0' }}>
      <Grid container spacing={2} >
        {items.map(item => item.user === undefined ?
          dataCard(item) : avatarCard(item)
        )
        }
      </Grid>
    </Box>
  );
}
