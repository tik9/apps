
subjects()
async function subjects() {
    let subjects = arguments.callee.name
    var res = await (await fetch(net_host + net_fun + 'utils')).json()
    res = res.filter(val => val.cat === 'Subjects I teach')

    let ul = document.createElement('ul')
    //@ts-ignore
    document.getElementById(subjects).append(ul)
    for (let elem of res) {
        let li = document.createElement('li')
        li.textContent = elem.text
        ul.append(li)
    }
}