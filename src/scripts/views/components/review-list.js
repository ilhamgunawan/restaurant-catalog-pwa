const ReviewList = {
  render(reviews) {
    return reviews
      .reduce((accumulator, consumerReview) => `
        ${accumulator}
        <div class="review-wrapper">
          <span class="review-name">
            <i class="material-icons">person</i>
            <span>${consumerReview.name || 'Unknown'}</span>
          </span>
          <span class="review-date">${consumerReview.date}</span>
          <p class="review-content">"${consumerReview.review || 'No message to display.'}"</p>
        </div>
        `, '');
  },
};

export default ReviewList;