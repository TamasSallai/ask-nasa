const GalleryComponent = (dataList) => {
  let imageComponents = ""
  dataList.forEach(({ date, url }) => {
    imageComponents += ImageComponent(date, url)
  })

  return /*html*/ `
    <div class="masonry-container">
      ${imageComponents}
    </div>
  `
}

const ImageComponent = (date, src) =>
  `<a data-img-date="${date}" class="img-container" href="#hero-component"><img src="${src}" alt="" /></a>`

export default GalleryComponent
