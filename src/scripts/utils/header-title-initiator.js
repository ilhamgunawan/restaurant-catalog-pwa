const HeaderTitleInitiator = {
  init(pageTitleSuffix) {
    this._titleContainer = document.querySelector('.brand-name');
    this._pageTitlePrefix = 'Cari Résto / ';
    this._pageTitleSuffix = pageTitleSuffix;
    this._renderPageTitle();
  },

  _renderPageTitle() {
    this._titleContainer.innerHTML = this._pageTitlePrefix + this._pageTitleSuffix;
  },
};

export default HeaderTitleInitiator;