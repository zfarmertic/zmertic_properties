// let search = document.getElementById("search")

// function searchBarF(){
//     let searchbar = document.getElementById("addSearchBar")
//     let existingInput = searchbar.querySelector('input');
//         if(!existingInput){
//         const input = document.createElement("input")
//         input.type = "text"
//         input.className = "created"
//         searchbar.appendChild(input)
//         }

//         else if(existingInput){
//             existingInput.style.display = (existingInput.style.display === "none") ? "block" : "none";
//         }
// }

// search.addEventListener("click", searchBarF)

let ShowMenu = document.getElementById("ShowMenu")
let sideBar = document.querySelector("#sideBar")
ShowMenu.addEventListener("click", ()=>{
        sideBar.style.display = "flex"
})
let HideMenu = document.getElementById("HideMenu")
HideMenu.addEventListener("click", ()=>{
    sideBar.style.display = "none"
})

let search = document.getElementById("search")
let showForm = document.getElementById("showForm")
let isShowForm = false;
    search.addEventListener("click", function(){
        isShowForm = !isShowForm;
        showForm.style.display = isShowForm ? "flex" : "none";

    })