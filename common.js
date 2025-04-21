const header=document.querySelector('.header')
const ele=document.querySelector('.ele')
window.addEventListener('scroll',function (){
  const num=document.documentElement.scrollTop
  // console.log(num)
  ele.style.display=num>200? 'block':'none'

})
