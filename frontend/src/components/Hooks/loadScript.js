const loadScript = (src) => {
    let script = document.createElement('script');
    script.src = src;
    script.async = true
    document.body.append(script);
    return ()=>{
      document.body.removeChild(script)
    }
  }


export default loadScript