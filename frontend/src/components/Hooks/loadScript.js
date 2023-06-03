const loadScript = (src) => {
    let script = document.createElement('script');
    script.onerror = () => {console.log("ERROR")}
    script.type = 'text/javascript'
    script.setAttribute("crossorigin","anonymous")
    script.src = src;
    script.async = true
    script.onload = () => {  }
    document.body.append(script);
    return ()=>{
      document.body.removeChild(script)
    }
  }


export default loadScript