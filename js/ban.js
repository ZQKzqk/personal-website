const div= document.getElementsByClassName('banan')[0]
const ul = div.querySelector('ul')
const ol =div.querySelector('ol')
const p = div.querySelector('p')
let index = 1
let cre
let fage = true
//给ol li
one()
function one(){
  let len = ul.children.length
   let str= document.createDocumentFragment()
        for(var i=0;i<len;i++){
            
            let li =document.createElement('li')
             li.dataset.aa=i
            if(i==0){
                li.classList.add('active')
            }
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
 cre=   setInterval(()=>{
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
     if(index==0){
         index=ul.children.length-2
         ul.style.left=-div.clientWidth*index+'px'
     }
      
        for(var j=0;j<ol.children.length;j++){
             ol.children[j].classList.remove('active')
        }
         
       ol.children[index-1].classList.add('active')
      
          fage=true
 }
 //移入移出
 four()
 function four(){
    div.addEventListener('mouseover',()=>{
        clearInterval(cre)

    }),
    div.addEventListener('mouseout',()=>{
        three()
    })
 }
 //两边的
 five()
 function five(){
     
    let  p=div.querySelector('p') 

    let le = p.getElementsByTagName('span')[0]
    let re = p.getElementsByTagName('span')[1]
     le.addEventListener('click',()=>{
        if(!fage){return}
        fage=false
        index--
        move(ul,{
            left:-index*div.clientWidth
        },end)
        
     })
     re.addEventListener('click',()=>{
        if(!fage){return}
        fage=false
        index++
        move(ul,{
            left:-index*div.clientWidth
        },end)
     })
    
 }
 //下面的
 six()
 function six(){
   ol.addEventListener('click',(e)=>{
    if(!fage){return}
    fage=false
       e=e||window.event
       let t = e.target||e.srcElement
       if(t.nodeName=='LI'){
           index = t.dataset.aa-0+1
           move(ul,{
            left:-index*div.clientWidth
        },end)
       }
       
   })
 }
 //bug
 bug()
function  bug(){

  document.addEventListener('visibilitychange',()=>{

    let  sss= document.visibilityState
    if(sss=="hidden"){    clearInterval(cre)}
    if(sss=='visible'){  three()}






  })








}