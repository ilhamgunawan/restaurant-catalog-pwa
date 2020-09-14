import Home from '../views/pages/home';
import RestaurantCatalogue from '../views/pages/restaurant-catalogue';
import Favorite from '../views/pages/favorite';
import RestaurantDetail from '../views/pages/restaurant-detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/restaurants': RestaurantCatalogue,
  '/favorite': Favorite,
  '/detail/:id': RestaurantDetail,
};

export default routes;