// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchDishes, toggleDishPublished } from '../services/dishService';
import Dish from './Dish';
import { Grid } from '@mui/material';

const Dashboard = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      const dishes = await fetchDishes();
      setDishes(dishes);
    };
    getDishes();
  }, []);

  const handleToggle = async (id) => {
    const updatedDish = await toggleDishPublished(id);
    setDishes(dishes.map(dish => dish._id === id ? updatedDish : dish));
  };

  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Dish Dashboard</h1>
      <div>

      <Grid container style={{ padding: '10px' }} spacing={3}>
        {dishes.map((dish, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Dish key={dish._id} dish={dish} onToggle={handleToggle} />
            </Grid>
          ))}
        </Grid>
      </div>
      
    </div>
  );
};

export default Dashboard;
