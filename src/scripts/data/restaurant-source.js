import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
import LoadingHandler from '../utils/loading-handler';

class RestaurantSource {
  static async getRestaurantList() {
    try {
      const loadingContainer = document.querySelector('.loading-holder');
      LoadingHandler.init(loadingContainer);
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      LoadingHandler.isLoadingEnded();
      return responseJson.restaurants;
    } catch (error) {
      LoadingHandler.isLoadingEnded();
      return error.message;
    }
  }

  static async getRestaurantDetail(id) {
    try {
      const loadingContainer = document.querySelector('.loading-holder');
      LoadingHandler.init(loadingContainer);
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      const responseJson = await response.json();
      LoadingHandler.isLoadingEnded();
      return responseJson.restaurant;
    } catch (error) {
      LoadingHandler.isLoadingEnded();
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
      return error.message;
    }
  }
}

export default RestaurantSource;