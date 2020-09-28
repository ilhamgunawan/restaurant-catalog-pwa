import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    const restaurants = (await dbPromise).getAll(OBJECT_STORE_NAME);
    return restaurants;
  },

  async putRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async deleteAllRestaurants() {
    return (await dbPromise).clear(OBJECT_STORE_NAME);
  },
};

export default FavoriteRestaurantIdb;