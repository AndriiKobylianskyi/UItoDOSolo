window.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container')

    container.addEventListener('click', (e) => {
        let target = e.target
        if (target.id === "close") {
            target.parentNode.remove()
        }


        if (target.id === "add") {
            let value = target.parentNode.parentNode.querySelector('input').value
            let element = document.createElement('div')
            if (value !== '') {
                element.innerHTML = `<img src="img/Ellipse1.png" alt="ellipse" id="firstEllipse">
            <img src="img/Ellipse2.png" alt="ellipse" id="secondEllipse" class="hide">
            <div class="task">${value}</div>
            <img src="img/x.png" alt="X" id="close">
            `
                element.classList.add('task__container')

                target.parentNode.parentNode.append(element)
            } else {
                alert("Введіть справу перед додаванням")
            }
            target.parentNode.parentNode.querySelector('input').value=''

        }

        if (target.id === "firstEllipse" || target.id === 'secondEllipse') {
            target.parentNode.classList.toggle('active')
            console.log(target.parentNode.querySelector('#secondEllipse').classList.toggle('hide'))

        }
    })
})