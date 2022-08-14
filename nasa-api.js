const key = "i1q1Gmd73WAwRZI2MyDD1ui94RYHxErZcMR9SQkB"
const baseURL = "https://api.nasa.gov"

export const getData = async (date = "") => {
  const response = await fetch(
    `${baseURL}/planetary/apod?api_key=${key}&date=${date}`
  )
  return response.json()
}

export const getDatas = async (startDate = "", endDate = "") => {
  const response = await fetch(
    `${baseURL}/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`
  )
  return response.json()
}
