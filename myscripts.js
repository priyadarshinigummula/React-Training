async function buttonclick(){
   await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// fecth method - get method 

const requrl= 'https://jsonplaceholder.typicode.com/posts/1' ;
const reqJson= async url =>{
    const response= await (await fetch(url)).json();
    userId.innerHTML=response.userId;
    id.innerHTML=response.id;
    title.innerHTML=response.title;
    body.innerHTML=response.body;

}
reqJson(requrl);


// post method 
async function putdata(){
await fetch('https://jsonplaceholder.typicode.com/posts',  {
    method :'POST',
    body : JSON.stringify({
        userId:202,
        id: 1,
        title: 'abc',
        body: 'abcdefghij'
    }), 
    headers :{
        'content-type': 'application/json ; charset=UTF-8',
    
    },
}).then((response)=> response.json())
.then((json)=> console.log(json));

}

putdata()



