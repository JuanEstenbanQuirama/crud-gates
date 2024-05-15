import "../scss/styles.scss";
import { coders } from "../../public/data/database.js";
import * as bootstrap from "bootstrap";
import { create, withFor, btnClear } from "./operations.js";
import { showSmallAlertSucces } from "./alerts.js";

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const form = document.getElementById("form");
const isName = document.getElementById("name");
const isLastName = document.getElementById("last-name");
const isEmail = document.getElementById("email");
// const isBtn = document.getElementById("btn-save");
let idToUpdate;

withFor(coders, tbody);

form.addEventListener("submit", function (event) {
  if (idToUpdate === undefined) {
    create(event, coders, isName, isLastName, isEmail, tbody);
  } else {
    for (const coder of coders) {
      if (coder.id == idToUpdate) {
        coder.name = isName.value;
        coder.lastName = isLastName.value;
        coder.email = isEmail.value;
      }
    }
    showSmallAlertSucces("updated");
    idToUpdate = undefined;
  }
  form.reset()
  withFor(coders, tbody);
  event.preventDefault();
});

// form.addEventListener('submit', function (event) {

//     create(event, coders, isName, isLastName, isEmail, tbody)
// })

let isBtnDelete = document.getElementById("delete");

isBtnDelete.addEventListener("click", function () {
  btnClear();
});

// isBtn.addEventListener('click',function () {

//     console.log(isName.value);
//     console.log(isLastName.value);
//     console.log(isEmail.value);

//     const tempCoder = {
//         id: Date.now(),
//         name:isName.value,
//         lastName: isLastName.value,
//         email: isEmail.value
//     }
//     coders.push(tempCoder)
//     console.log(tempCoder);
//     withFor(coders,tbody)
// })

// form.addEventListener("submit", function (e) {

//   const tempCoder = {
//     id: Date.now(),
//     name: isName.value,
//     lastName: isLastName.value,
//     email: isEmail.value,
//   };
//   coders.push(tempCoder);
//   console.log(tempCoder);
//   withFor(coders, tbody);
//   form.reset()
//   event.preventDefault()
// });

// version 1
// table.addEventListener('click', (e) => {
//     if (e.target.classList.contains('btn-danger')) {
//         let idToDelete = e.target.getAttribute('data-id')
//         coders.forEach((coder, index) => {
//             if(coder.id == idToDelete) {
//                 coders.splice(index, 1)
//             }
//         })
//         withFor(coders, tbody);
//         console.log(idToDelete);
//         showSmallAlertSucces('Delete')
//     } else {
//         showSmallAlertSucces('le diste en otro lugar')
//     }
// })

//version 2
table.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    let idToDelete = e.target.getAttribute("data-id");
    deleteItem(coders, idToDelete);
    withFor(coders, tbody);
    console.log(idToDelete);
    showSmallAlertSucces("Delete");
  } else {
    showSmallAlertSucces("le diste en otro lugar");
  }

  if (e.target.classList.contains("btn-info")) {
    showSmallAlertSucces("to update");
    idToUpdate = e.target.getAttribute("data-id");
    console.log(idToUpdate);
    // buscar al user enla base de datos
    const userFound = coders.find((coder) => coder.id == idToUpdate);
    // console.log(userFound);
    isName.value = userFound.name;
    isLastName.value = userFound.lastName;
    isEmail.value = userFound.email;
  }
});

export function deleteItem(coders, idToDelete) {
  coders.forEach((coder, index) => {
    if (coder.id == idToDelete) {
      coders.splice(index, 1);
    }
  });
}
