const promise=new Promise((resolve,reject)=>{
    const api=true;
    setTimeout(()=>{
        if(api)resolve('Data fetched')
        else reject('Error while fetching')
    },2000)
})

promise
        .them((msg)=>{
            console.log("Succes"+msg);
        })
        .catch((error)=>
        {
            console.log("Error"+error);
        })

const fetchData=new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .them((response)=>{
            return response.json()
        })
        .them
})