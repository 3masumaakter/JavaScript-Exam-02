function photosUsers(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}

photosUsers();

function displayUsers(data){
    const sectionId = document.getElementById('users');
    for(const users of data){
    const div = document.createElement('div');
    div.classList.add("users")
        div.innerHTML =`
        <h2>${users.albumId}</h2>
        <h3>${users.id}</h3>
        <h3>${users.title}</h3>
        <a>${users.url}</a>
        <a>${users.thumbnailUrl}</a>
        
        `;

    sectionId.appendChild(div);
    console.log(users);
} 
}