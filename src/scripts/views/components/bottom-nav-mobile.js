const BottomNavMobile = {
  render() {
    return `
      <nav class="bottom-nav-wrapper">
        <a href="#/home" class="material-icons bottom-nav-button">home</a>
        <a href="#/restaurants" class="material-icons bottom-nav-button">local_dining</a>
        <a href="#/liked-restaurants" class="material-icons bottom-nav-button">thumb_up</a>
      </nav>
    `;
  },
};

export default BottomNavMobile;