

function shareAction(title, url) {
    try{
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            })
            .then(()=>{
                console.log('Shared')
            }).catch((error) => console.log(error))
    }
    }catch(err){
            
    }

}


export default shareAction