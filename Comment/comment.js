function commentUser(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

commentUser();

function displayUsers(data){
    const sectionId = document.getElementById('users');
    for(const users of data){
        const div = document.createElement('div');
        div.classList.add("users")
        div.innerHTML =`
        <h2>${users.postId}</h2>
        <h5>${users.id}</h5>
        <h5>${users.name}</h5>
        <h5>${users.email}</h5>
        <h4>${users.body}</h4>
        `;

    sectionId.appendChild(div);
    console.log(users);
    }

}