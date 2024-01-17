
getContact()

async function getContact() {
    var res = await (await fetch(net_host + net_fun + 'utils')).json()
    res = (res.filter(val => val.key === 'contact'))[0].val;
    //@ts-ignore
        document.getElementById('contact_content').innerHTML = marked.parse(res);
}