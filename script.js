

function carrousel(){
  
    let img1 = document.getElementById('img1')
    let img2 = document.getElementById('img2')
    let img3 = document.getElementById('img3')
    let img4 = document.getElementById('img4')

    setInterval(() => {
        img1.style.display= 'none'
        img2.style.display= 'block'
        img3.style.display= 'none'
        img4.style.display= 'none'
    }, 5000)

    setInterval(() => {
        img1.style.display= 'none'
        img2.style.display= 'none'
        img3.style.display= 'block'
        img4.style.display= 'none'
    }, 10000)

    setInterval(() => {
        img1.style.display= 'none'
        img2.style.display= 'none'
        img3.style.display= 'none'
        img4.style.display= 'block'
    }, 15000)

    setInterval(() => {
        img1.style.display= 'block'
        img2.style.display= 'none'
        img3.style.display= 'none'
        img4.style.display= 'none'
    }, 20000)
}

carrousel();