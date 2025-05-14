fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(f=>f.json())
.then(k=>console.log(k))