var net_fun = '/.netlify/functions/'
var net_host = 'http://localhost'
// var net_host = 'https://tifun.netlify.app'

getAbout()
async function getAbout() {

    var res = await (await fetch(net_host + net_fun + 'utils')).json()
    res = res.filter(val => val.cat === 'About me')
    console.log(res)

    let tab = document.createElement('table')
    //@ts-ignore
    document.getElementById('about_content').append(tab)
    let tr = document.createElement('tr')
    let text = document.createElement('th')
    let finals = document.createElement('th')
    text.textContent = 'About'
    finals.textContent = 'Finals'
    tr.append(text, finals)
    tab.append(tr)
    for (let elem of res) {
        let tr = document.createElement('tr')
        console.log(elem)

        let about = document.createElement('td')
        let finals = document.createElement('td')
        about.textContent = elem.text
        finals.textContent = elem.finals
        tr.append(about, finals)
        tab.append(tr)
    }
}