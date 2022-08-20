const DatePicker = () => {
  const current = new Date().toISOString().split("T")[0]
  return /*html*/ `
    <form id="date-form">
      <input id="date-input" type="date" value="${current}" max="${current}"/>
      <input id="date-submit" type="submit" value="Get Image"/>
    </form>`
}

export default DatePicker
