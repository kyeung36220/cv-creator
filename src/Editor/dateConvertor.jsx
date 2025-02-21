// used to convert date in text form (e.g. April 2024) to a format that the date input can fill (e.g. 2024-04)

export function textDateToDate(textDate) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    const [textMonth, year] = textDate.split(' ')
    
    let month
    for (let i = 0; i < months.length; i++) {
        if (textMonth === months[i]) {
            month = i + 1
            break
        }
    }
    if (month < 10) {
        month = `0${month}`
    }
    return `${year}-${month}`
}