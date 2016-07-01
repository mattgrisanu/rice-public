// update restaurant
export function restaurantUpdate(restaurant) {
  return {
    type: 'RESTAURANT_UPDATE',
    restaurant,
  };
}

// accept restaurant
export function restaurantAccept() {
  return {
    type: 'RESTAURANT_ACCEPT',
  };
}

// decline restaurant
export function restaurantDecline() {
  return {
    type: 'RESTAURANT_DECLINE',
  };
}
