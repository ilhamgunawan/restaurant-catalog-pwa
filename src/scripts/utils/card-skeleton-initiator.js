/* eslint-disable no-plusplus */
import CardSkeleton from '../views/components/card-skeleton';

const CardSkeletonInitiator = {
  initHome(restaurantListContainer, favoriteListContainer) {
    this._restaurantListContainer = restaurantListContainer;
    this._favoriteListContainer = favoriteListContainer;
    this._loopHomeCardSkeleton();
  },

  init(listContainer) {
    this._listContainer = listContainer;
    this._loopAllCardSkeleton();
  },

  _loopHomeCardSkeleton() {
    let html = '';
    for (let i = 0; i < 8; i++) {
      html += CardSkeleton.render();
    }
    this._renderSkeleton(html, this._restaurantListContainer);
    this._renderSkeleton(html, this._favoriteListContainer);
  },

  _loopAllCardSkeleton() {
    let html = '';
    for (let i = 0; i < 20; i++) {
      html += CardSkeleton.render();
    }
    this._renderSkeleton(html, this._listContainer);
  },

  _renderSkeleton(html, listContainer) {
    listContainer.innerHTML = html;
  },
};

export default CardSkeletonInitiator;