function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} =${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }
    if (tab.style.display = 'none') {
        tab.style.display = 'block'
        tab.style.animation = 'fadeIn 0.5s ease-in-out'
        tab.style.opacity = '1'
    } else {
        tab.style.display = 'none '
        tab.style.opacity = '0'
    }
}