const counts = document.querySelectorAll('.counter-numbers')
const speed = 50
counts.forEach((col) => {
    function upData() {
        const target = Number(col.getAttribute('data-target'))
        const count = Number(col.innerText)
        const inc = target / speed
        if (count < target) {
            col.innerText = Math.floor(inc + count)
            setTimeout(upData, 1)
        } else {
            col.innerText = target
        }

    }
    upData()

})