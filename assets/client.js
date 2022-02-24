const toTitleCase = (word) => {
    return word
      .toLowerCase()
      .split('')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
  }

  website =''
  company = ''

  job = ''
  company = toTitleCase(company)

  job = toTitleCase(job)

  job_id = document.getElementById("job")
  document.getElementById("company").textContent = company
  job_id.textContent = job
  job_id.style.fontStyle = "italic"
  job_id.style.fontWeight = "bold"

  street = ""
  city = ""

  address = document.getElementById("address")
  if (street) {
    street = toTitleCase(street)
    p_elem = document.createElement("span")
    p_elem.textContent = street
    address.appendChild(p_elem)
  }

  p_elem = document.createElement("p")
  city = toTitleCase(city)

  p_elem.textContent = city
  address.appendChild(p_elem)

  dat = new Date()

  dd = dat.getDate()
  mm = dat.getMonth() + 1
  yyyy = dat.getFullYear()

  if (dd < 10) {
    dd = "0" + dd
  }

  if (mm < 10) {
    mm = "0" + mm
  }

  dat = dd + "/" + mm + "/" + yyyy

  document.getElementById("date").textContent = dat