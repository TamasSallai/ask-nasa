import { getData, getDatas } from "./nasa-api.js"
import HeroComponent from "./components/hero/hero.js"
import GalleryComponent from "./components/gallery/gallery.js"
import LoadingComponent from "./components/loading/loading.js"

const loadHero = async (data) => {
  const heroData = data === undefined ? await getData() : data

  const exHeroComponent = document.querySelector("#hero-component")
  if (exHeroComponent) {
    exHeroComponent.remove()
  }

  document
    .querySelector("#root")
    .insertAdjacentHTML("afterbegin", HeroComponent(heroData))
}

const loadGallery = async () => {
  const root = document.querySelector("#root")
  root.insertAdjacentHTML("beforeend", LoadingComponent())

  const data = await getDatas("2022-07-01", "2022-08-14")

  document.querySelector(".loading-container").remove()

  root.insertAdjacentHTML("beforeend", GalleryComponent(data))
}

await loadHero()
await loadGallery()

const images = document.querySelectorAll(".img-container")
images.forEach((image) => {
  image.addEventListener("click", async () => {
    const data = await getData(image.id)
    loadHero(data)
  })
})
