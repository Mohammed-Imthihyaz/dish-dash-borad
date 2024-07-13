// src/components/Dish.js
import React from 'react';
import { Typography, Card, CardHeader, CardMedia, CardContent } from '@mui/material';

const Dish = ({ dish, onToggle }) => {
  return (
    <div>
      <Card>
                <CardHeader
                  title={dish.dishName}
                />
                <CardMedia style={{height: '230px', width: '100%'}}>
                  <img src={dish.imageUrl} alt={dish.dishName} style={{height : '100%', width : '100%'}}/>
                
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  <button onClick={() => onToggle(dish._id)} style = {{padding : '10px', backgroundColor: '#858585', color : '#fff', cursor : 'pointer', border: 'None'}}>
                    {dish.isPublished ? 'Unpublish' : 'Publish'}
                  </button>
                  </Typography>
                </CardContent>
              </Card>
    </div>
  );
};

export default Dish;
