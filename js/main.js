// alert('to działa!')

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika kliknięć to ${number}`
    }
}

const counter = add() //liczy od 1
document.addEventListener('click', counter) //liczy od 1
// const counterFrom5 = add(5);//zaczyna liczyć dopiero od 5
// document.addEventListener('click', counterFrom5)//zaczyna liczyć dopiero od 5