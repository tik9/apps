
const toTitleCase = (word) => { return word.charAt(0).toUpperCase() + word.slice(1) }


document.getElementById("company").textContent = toTitleCase(company)
var job_id = document.getElementById("job")
job_id.textContent = toTitleCase(job)
job_id.style.fontStyle = "italic"
job_id.style.fontWeight = "bold"


var address = document.getElementById("address")
if (typeof street != 'undefined') {
    var p_street = document.createElement("span")
    p_street.textContent = toTitleCase(street)
    address.appendChild(p_street)
}
if (typeof email != 'undefined') {
    var email_id = document.getElementById("email")
    email_id.textContent = email
}
var p_city = document.createElement("p")
p_city.textContent = city
address.appendChild(p_city)

var dat = new Date()

var dd = dat.getDate()
var mm = dat.getMonth() + 1
var yyyy = dat.getFullYear()

if (dd < 10) {
    dd = "0" + dd
}

if (mm < 10) {
    mm = "0" + mm
}

var dat = dd + "." + mm + "." + yyyy

document.getElementById("date").textContent = dat