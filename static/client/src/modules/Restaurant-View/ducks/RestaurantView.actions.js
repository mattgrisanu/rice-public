// update restaurant
export function restaurantUpdate(restaurant) {
  console.log('action restaurantUpdate', restaurant);
  return {
    type: 'RESTAURANT_UPDATE',
    restaurant,
  };
}
