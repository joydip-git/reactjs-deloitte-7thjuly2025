async function getPosts() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
        console.log(data.slice(0, 10));
    } catch (error) {
        console.log(error);
    }
}

getPosts()