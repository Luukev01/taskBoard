/** This is the date function */

function formatDate(dateObject){
    const dateParts = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear()
    } 

    return `${dateParts.date}/${dateParts.month}/${dateParts.year}`;
}

const d = new Date(); 
const myFormattedDate = formatDate(d);

document.getElementById("date").innerHTML = myFormattedDate;

