import Home from '../views/pages/home';
import RestaurantCatalogue from '../views/pages/restaurant-catalogue';
import LikedRestaurant from '../views/pages/liked-restaurant';
import RestaurantDetail from '../views/pages/restaurant-detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/restaurants': RestaurantCatalogue,
  '/liked-restaurants': LikedRestaurant,
  '/detail/:id': RestaurantDetail,
};

export default routes;