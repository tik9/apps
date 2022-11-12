var dat = new Date()

var dd = dat.getDate()
var mm = dat.getMonth() + 1
var yyyy = dat.getFullYear()

if (dd < 10) dd = "0" + dd

if (mm < 10) mm = "0" + mm

var dat = dd + "." + mm + "." + yyyy

document.getElementById("date").textContent = dat
