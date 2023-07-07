

getTools()
//@ts-ignore
async function getTools() {
    var net_fun = '/.netlify/functions/'
    var net_host = 'http://localhost'
    var net_host = 'https://tifun.netlify.app'

    var res = await (await fetch(net_host + net_fun + 'mongo?op=find&coll=tools')).json()
    res = res.filter(val => val.cv === true)
    res = await (await (fetch(net_host + net_fun + 'utils', {
        method: "post", body: JSON.stringify(
            {
                type: "sortTable",
                sort1: "tool",
                val: res
            }
        )
    }))).json()
    // console.log(res)

    let tab = document.createElement('table')
    //@ts-ignore
    document.getElementById('tools_content').append(tab)
    let tr = document.createElement('tr')
    let tdTool = document.createElement('th')
    // let tdCat = document.createElement('th')
    // let tdYears = document.createElement('th');tdYears.textContent = 'Jahre/Years'
    // tdCat.textContent = 'Category'
    tdTool.textContent = 'Tool'
    tr.append(tdTool)
    tab.append(tr)
    for (let elem of res) {
        let tdTool = document.createElement('td')
        // let tdCat = document.createElement('td')
        // let tdYears = document.createElement('td')
        // tdYears.textContent = '1'
        let tr = document.createElement('tr')
        tab.append(tr)
        tdTool.textContent = elem.tool
        // tdCat.textContent = elem.category[0].toUpperCase() + elem.category.slice(1)
        tr.append(tdTool)
    }
    return res
}