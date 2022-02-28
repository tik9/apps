const toTitleCase = (word) => {
    return word
        .toLowerCase()
        .split('')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
}

document.getElementById("mobile").textContent = mobile
document.getElementById("company").textContent = toTitleCase(company)
document.getElementById("own_address").textContent = own_address
var job_id = document.getElementById("job")
job_id.textContent = toTitleCase(job)
job_id.style.fontStyle = "italic"
job_id.style.fontWeight = "bold"

var street = ""
var city = ""

var address = document.getElementById("address")
if (street) {
    var p_elem = document.createElement("span")
    p_elem.textContent = toTitleCase(street)
    address.appendChild(p_elem)
}

var p_elem = document.createElement("p")
p_elem.textContent = toTitleCase(city)
address.appendChild(p_elem)

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