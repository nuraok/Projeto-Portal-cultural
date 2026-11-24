const sumario = document.getElementById('sumario');
const itensArray = Array.from(sumario.querySelectorAll('div'));
let selecao = 0
let mouseEmCima = false
let acumulado = 0

function change(item){
    itensArray.forEach(elemento => {
        elemento.style.backgroundColor = "red"
    })
    item.style.backgroundColor = "white"
}

itensArray.forEach((elemento, index) => {
    elemento.addEventListener('mouseover', () => {
        mouseEmCima = true
        selecao = index
        change(elemento)
    })

    elemento.addEventListener('mouseout', () => {
        mouseEmCima = false
    })
})

sumario.addEventListener('wheel', (event) => {
    if (mouseEmCima) return

    acumulado += event.deltaY

    if (acumulado > 400) { // Aumente para ficar mais lento, diminua para ficar mais rápido
        selecao ++
        acumulado = 0
    } else if (acumulado < -400) {
        selecao --
        acumulado = 0
    } else {
        return
    }

    selecao = ((selecao % 5) + 5) % 5
    change(itensArray[selecao])
}, { passive: true });

change(itensArray)
