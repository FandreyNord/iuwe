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
let geoMap  =document.getElementsByClassName('geo-map')
let gork = document.getElementsByClassName('gork')
let chal = document.getElementsByClassName('chal')
let geo = document.getElementsByClassName('geo')
let geoCount = 0
    geo[count-1].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

geo[count].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

geo[count+1].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

geo[count+2].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

geo[count+3].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

geo[count+4].onclick = function(){
    if(geoCount%2==0){
        geoMap[count-2].style.display = 'block'
    }
    else{
        geoMap[count-2].style.display = 'none'
    }
    geoCount++
}

chal[0].onclick = function(){
    document.getElementById('gork').style.display = 'none'
    document.getElementById('chal').style.display = 'block'
}
gork[0].onclick = function(){
    document.getElementById('chal').style.display = 'none'
    document.getElementById('gork').style.display = 'block'
}
