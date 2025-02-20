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