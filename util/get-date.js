export const getPreviousDate = (date = new Date(), days) => {
  const previous = new Date(date.getTime())
  previous.setDate(date.getDate() - days)

  return previous
}

export const getFormatedDate = (date) => {
  return date.toISOString().split("T")[0]
}
