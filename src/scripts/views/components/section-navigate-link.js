const SectionNavigateLink = {
  render(sectionTitle, sectionUrl) {
    return `
      <a href="${sectionUrl}" class="section-navigate-link">
        <img class="section-navigate-icon" src="/icon-link.svg" alt="link icon">
        <h2 class="section-title">${sectionTitle}</h2>  
      </a>
    `;
  },
};

export default SectionNavigateLink;