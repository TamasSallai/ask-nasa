import { getData, getDatas } from "./nasa-api.js"
import HeroComponent from "./components/hero/hero.js"
import GalleryComponent from "./components/gallery/gallery.js"
import LoadingComponent from "./components/loading/loading.js"
import DatePicker from "./components/date-picker/date-picker.js"
import { getPreviousDate, getFormatedDate } from "./util/get-date.js"

const loadHero = (data) => {
  const exHeroComponent = document.querySelector("#hero-component")
  if (exHeroComponent) exHeroComponent.remove()

  document
    .querySelector("#root")
    .insertAdjacentHTML("afterbegin", HeroComponent(data))
}

const loadDatePicker = () => {
  document.querySelector("#root").insertAdjacentHTML("beforeend", DatePicker())
}

const loadGallery = async () => {
  const root = document.querySelector("#root")
  root.insertAdjacentHTML("beforeend", LoadingComponent())

  const currentDate = new Date()
  const previousDate = getPreviousDate(currentDate, 30)
  const formatedCurrentDate = getFormatedDate(currentDate)
  const formatedPreviousDate = getFormatedDate(previousDate)

  const data = await getDatas(formatedPreviousDate, formatedCurrentDate)

  document.querySelector(".loading-container").remove()
  root.insertAdjacentHTML("beforeend", GalleryComponent(data))
}

loadHero(await getData())
loadDatePicker()
await loadGallery()

const images = document.querySelectorAll(".img-container")
images.forEach((img) => {
  img.addEventListener("click", async () => {
    const imgDate = img.getAttribute("data-img-date")

    const dateInput = document.querySelector("#date-input")
    dateInput.setAttribute("value", imgDate)

    const data = await getData(imgDate)
    loadHero(data)
  })
})

const dateForm = document.querySelector("#date-form")
dateForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const dateInput = document.querySelector("#date-input")
  dateInput.setAttribute("value", dateInput.value)

  const data = await getData(e.target[0].value)
  loadHero(data)
})
