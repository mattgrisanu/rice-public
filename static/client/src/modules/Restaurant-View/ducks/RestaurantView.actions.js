// update restaurant
export function restaurantUpdate(restaurant) {
  return {
    type: 'RESTAURANT_UPDATE',
    restaurant,
  };
}

// accept restaurant
export function restaurantAccept(id) {
  return {
    type: 'RESTAURANT_ACCEPT',
    id,
  };
}

// decline restaurant
export function restaurantDecline(id) {
  return {
    type: 'RESTAURANT_DECLINE',
    id,
  };
}
