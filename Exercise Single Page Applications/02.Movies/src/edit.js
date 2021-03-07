// import { request } from './dom.js';
// import { showHome } from './home.js';

// let main;
// let section;

// export function setupEdit(mainTarget, sectionTarget) {
//     main = mainTarget;
//     section = sectionTarget;
// }

// async function showEdit(movie) {
//     main.innerHTML = '';
//     main.appendChild(section);
//     const form = section.querySelector('form');
//     console.log(movie);
//     form.querySelector(`input[name='title']`).value = movie.title;
//     form.querySelector(`textarea[name='description']`).innerText = movie.description;
//     form.querySelector(`input[name='imageUrl']`).value = movie.img;
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const formData = new FormData(form);
//         const title = formData.get('title');
//         const description = formData.get('description');
//         const imageUrl = formData.get('imageUrl');
//         if (title == '' || description == "" || imageUrl == '') {
//             alert('All fields are required!');
//             return;
//         }
//         movie.title = title;
//         movie.description = description;
//         movie.img = imageUrl;
//         let result = await editMovie(movie);
//         showHome();
//     });
// }

// async function editMovie(data) {
//     // console.log(JSON.stringify({ userId, email }));
//     const token = sessionStorage.getItem('userToken');
//     const userId = sessionStorage.getItem('userId');
//     const email = sessionStorage.getItem('email');
//     const result = await request('http://localhost:3030/data/movies/' + data._id, {
//         method: 'put',
//         headers: {
//             'X-Authorization': token,
//             'Content-Type': 'application/json'
//         },

//         // body: JSON.stringify(data)
//         body: JSON.stringify({ userId, email })
//     });

//     return result;
// }



// import { showHome } from "./home.js"

// let main;
// let section;
// let movieToken;

// export function setupEdit(mainElement, sectionElement) {
//     main = mainElement;
//     section = sectionElement;
//     console.log(section);

//     let editButton = section.querySelector("form button");
// console.log(editButton);
// editButton.addEventListener("submit", async (e) => {
//     console.log('yes');
//     // e.preventDefault();

//     let title = main.querySelector("input[name='title']").value;
//     let description = main.querySelector("textarea[name='description']").value;
//     let img = main.querySelector("input[name='imageUrl']").value;
//     let token = sessionStorage.getItem("token")

//     if (title == "" || description == "" || img == "") {
//         alert("The title, description and image shouldn’t be empty.");
//         return
//     }

//     let request = await fetch(`http://localhost:3030/data/movies/${movieToken}`, {
//         method: 'put',
//         headers: {
//             "Content-Type": "application/json",
//             "X-Authorization": token
//         },
//         body: JSON.stringify({ title, description, img })
//     })

//     if (request.ok) {
//         clearFields();
//         showHome();
//     } else {
//         alert("Something went wrong");
//         return;
//     }
// })
// }

// export function showEdit(movieId) {
//     main.innerHTML = "";
//     main.appendChild(section);
//     movieToken = movieId;
// }

// function clearFields() {
//     main.querySelector("input[name='title']").value = "";
//     main.querySelector("textarea[name='description']").value = "";
//     main.querySelector("input[name='imageUrl']").value = "";
// }

import { showHome } from "./home.js"

let main;
let section;

export async function setupEdit(e) {

    let editButton = section.querySelector("form button");
    // console.log(editButton);
    editButton.addEventListener("submit", async (e) => {
        console.log('yes');
        // e.preventDefault();
    
        let title = main.querySelector("input[name='title']").value;
        let description = main.querySelector("textarea[name='description']").value;
        let img = main.querySelector("input[name='imageUrl']").value;
        let token = sessionStorage.getItem("token")
    
        if (title == "" || description == "" || img == "") {
            alert("The title, description and image shouldn’t be empty.");
            return
        }
    
        let request = await fetch(`http://localhost:3030/data/movies/${movieToken}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token
            },
            body: JSON.stringify({ title, description, img })
        })
    
        if (request.ok) {
            clearFields();
            showHome();
        } else {
            alert("Something went wrong");
            return;
        }
    })
  
}

export function showEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', setupEdit);
}
