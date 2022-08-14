const HeroComponent = ({ title, explanation, media_type, url }) => {
  const media =
    media_type === "image"
      ? `<img class="hero-img" src="${url}" alt="" />`
      : `<iframe class="hero-video" src="${url}" frameborder="0" allowfullscreen></iframe>`

  return /*html*/ `
    <div id="hero-component" class="hero-container">
      <h1 class="title">Astronomy picture of the day</h1>
      <div class="hero-media-container">${media}</div>
      <div class="hero-text-container">
        <h2 class="title">${title}</h2>
        <p class="explanation">${explanation}</p>
      </div>
    </div>`
}

export default HeroComponent
