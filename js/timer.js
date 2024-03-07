const minutes =document.getElementById('m')
const seconds =document.getElementById('s')


let sec=seconds.innerText
let min=minutes.innerText

const updater =()=>{
    sec=+sec
    if(sec===59){
        min=+min
        ++min
        min=min.toString()
        minutes.innerText=min.padStart(2,"0")
        seconds.innerText='0'
        sec=0
        return
    }
    ++sec
    sec=sec.toString()
    seconds.innerText=sec.padStart(2,"0")
}
setInterval(updater,1000)
