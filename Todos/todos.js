function todosUser(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

todosUser();

function displayUsers(data){
    const sectionId = document.getElementById('users');
    for(const users of data){
        const div = document.createElement('div');
        div.classList.add("users")
        div.innerHTML =`
        <h2>${users.userId}</h2>
        <h3>${users.id}</h3>
        <h3>${users.title}</h3>
        <h4>${users.completed}</h4>
        
        `;

    sectionId.appendChild(div);
    console.log(users);
}
}