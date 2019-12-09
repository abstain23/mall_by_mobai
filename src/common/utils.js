export function debounce(f,delay){
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      f.apply(this,args)
    },delay)
  }
}