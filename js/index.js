let count = 1;

let reight = document.getElementById('reight')
let left = document.getElementById('left')

reight.onclick = function(){
    
    
    let meinElement = document.getElementById(`id${count}`)
    meinElement.style.display = 'none'
    count++
    if (count>=8){
        count = 1
        let newElement = document.getElementById(`id${count}`)
        newElement.style.display = 'flex'
    }
    else{
        let newElement = document.getElementById(`id${count}`)
        newElement.style.display = 'flex'
    }
    
}

left.onclick = function(){
    
    let meinElement = document.getElementById(`id${count}`)
    meinElement.style.display = 'none'
    count--
    if (count<=0){
        count = 7
        let newElement = document.getElementById(`id${count}`)
        newElement.style.display = 'flex'
    }
    else{
        let newElement = document.getElementById(`id${count}`)
        newElement.style.display = 'flex'
    }
    
}