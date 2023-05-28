
let count=0

let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")




   

function increment() {
    
    count += 1
    countEl.innerText=count
}

function Save(){
    
   let precount=count + " - "
    saveEl.textContent +=precount
    countEl.innerText=0
    console.log(count)
    count=0
    
}


