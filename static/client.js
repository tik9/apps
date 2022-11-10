
document.getElementById("company").textContent = company
var job_id = document.getElementById("job")
job_id.textContent = job
job_id.style.fontStyle = "italic"
job_id.style.fontWeight = "bold"

document.getElementById("city").textContent = city

if (typeof email != 'undefined') document.getElementById("email").textContent = email

var dat = new Date()

var dd = dat.getDate()
var mm = dat.getMonth() + 1
var yyyy = dat.getFullYear()

if (dd < 10) dd = "0" + dd

if (mm < 10) mm = "0" + mm

var dat = dd + "." + mm + "." + yyyy

document.getElementById("date").textContent = dat
