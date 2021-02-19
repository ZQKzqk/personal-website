const div= document.getElementsByClassName('banan')[0]
const ul = div.querySelector('ul')
const ol =div.querySelector('ol')
const p = div.querySelector('p')
let index = 1

//给ol li
one()
function one(){
  let len = ul.children.length
   let str= document.createDocumentFragment()
        for(var i=0;i<len;i++){
            let li =document.createElement('li')
               str.appendChild(li)
        }
      ol.appendChild(str)
        
}
//ul的li
two()
function two(){
  let first = ul.firstElementChild.cloneNode(true)
  let last = ul.lastElementChild.cloneNode(true)
    ul.insertBefore(last,ul.firstElementChild)
    ul.appendChild(first)
    let div_width=div.clientWidth
    console.log(div_width);
    ul.style.width=div_width*ul.children.length+'px'
    ul.style.left=-div.clientWidth+'px'
} 
//跑起来
three()
function three(){
    setInterval(()=>{
      index++
      move(ul,{
        left:-index*div.clientWidth
    },end)
    },2000)
    
}
//最后函数
 function end(){
     if(index==ul.children.length-1){
         index=1
         ul.style.left=-div.clientWidth+'px'
     }
 }