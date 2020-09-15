import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
import Loading from '../views/components/loading';

class RestaurantSource {
  static async getRestaurantList(loadingContainer) {
    try {
      loadingContainer.innerHTML = Loading.render();
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      loadingContainer.innerHTML = '';
      return responseJson.restaurants;
    } catch (error) {
      return error.message;
    }
  }

  static async getRestaurantDetail(id, loadingContainer) {
    try {
      loadingContainer.innerHTML = Loading.render();
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      const responseJson = await response.json();
      loadingContainer.innerHTML = '';
      return responseJson.restaurant;
    } catch (error) {
      return error.message;
    }
  }

  static async postReview(userReviewData) {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.X_AUTH_TOKEN,
        },
        body: JSON.stringify(userReviewData),
      });
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default RestaurantSource;