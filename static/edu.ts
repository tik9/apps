
edu()
async function edu() {
    let edu = arguments.callee.name
    var res = await (await fetch(net_host + net_fun + 'utils')).json()
    res = res.filter(val => val.cat === 'About me')

    let tab = document.createElement('table')
    //@ts-ignore
    document.getElementById(edu).append(tab)
    let tr = document.createElement('tr')
    let text = document.createElement('th')
    let finals = document.createElement('th')
    text.textContent = 'Degree'
    finals.textContent = 'Finals'
    tr.append(text, finals)
    tab.append(tr)
    for (let elem of res) {
        let tr = document.createElement('tr')

        let about = document.createElement('td')
        let finals = document.createElement('td')
        about.textContent = elem.text
        finals.textContent = elem.finals
        tr.append(about, finals)
        tab.append(tr)
    }
}