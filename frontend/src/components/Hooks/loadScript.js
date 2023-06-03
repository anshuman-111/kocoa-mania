const loadScript = (src) => {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => { console.log(`script ${script.src} is loaded `)}
    document.body.append(script);
    return ()=>{
      document.body.removeChild(script)
    }
  }


export default loadScript