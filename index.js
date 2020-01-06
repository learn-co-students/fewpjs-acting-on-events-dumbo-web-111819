// Your code here

let dodger = document.querySelector('#dodger');
dodger.style.backgroundColor = 'purple'

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
    if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }

})

let moveDodgerLeft = () =>{
    let moveLeft = dodger.style.left.replace('px','');
    let leftMove = parseInt(moveLeft)

    if (leftMove > 0) {
        dodger.style.left = `${leftMove - 2}px`;
    }
}

let moveDodgerRight = () =>{
        let editLeft = dodger.style.left.replace('px','')
        let leftValue = parseInt(editLeft)
        if (leftValue <= 360) {
            dodger.style.left = `${leftValue + 2}px`;
        }
    
}