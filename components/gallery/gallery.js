const GalleryComponent = (dataList) => {
  let galleryItems = ""

  dataList.reverse()
  dataList.forEach(({ media_type, date, url }) => {
    galleryItems += GalleryItemComponent(media_type, date, url)
  })

  return /*html*/ `
    <div id="gallery" class="masonry-container">
      ${galleryItems}
    </div>`
}

const GalleryItemComponent = (mediaType, date, src) => {
  if (mediaType === "video") {
    const videoId = src.substring(src.lastIndexOf("/") + 1, src.indexOf("?"))
    src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
  }

  return /*html*/ `
    <a data-img-date="${date}" class="img-container" href="#hero-component">
      <img src="${src}" alt="" />
    </a>`
}

export default GalleryComponent
