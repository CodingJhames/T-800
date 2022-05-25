
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("clicked button");
    formValidation();
    
})

let formValidation = () => {

    if ( input.value === "") {
        msg.innerHTML = "Post no debeestar en blanco";
        console.log("falló");
    } else {
        console.log("success");
        acceptData();
    }

}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += 
    `
<div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>
`
input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}