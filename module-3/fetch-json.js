(function(){

    // fech json file
    function fetchJson(){
        let file = 'http://127.0.0.1:5500/module-2/data.json' ;
        fetch(file)
            .then((response)=>{
                return response.json()
            })
            .then((users)=>{
                // console.log(users)
            })
    }

    fetchJson()

    // render the data in tabular form
    function render(data){
        
    }


})()