// function withforoff(){
//     for (const coder of coders) {
//         tbody.innerHTML += `
//         <tr>
//         <th scope="row">${coder.id}</th>
//         <td>${coder.name}</td>
//         <td>${coder.lastName}</td>
//         <td class="text-lowercase">${coder.email}<br>
//         <tr>`;
//       }
// }
// export function withforEach(coders,tbody){
//     coders.forEach(coder => {
//         tbody.innerHTML += `
//       <tr>
//       <th scope="row">${coder.id}</th>
//       <td>${coder.name}</td>
//       <td>${coder.lastName}</td>
//       <td class="text-lowercase">${coder.email}<br>
//       <tr>`
//     });
// }

import { showSmallAlertSucces } from "./alerts";

// function withForIn(){
//     for (const index in coders) {
//         tbody.innerHTML += `
//           <tr>
//           <th scope="row">${coders[index].id}</th>
//           <td>${coders[index].name}</td>
//           <td>${coders[index].lastName}</td>
//           <td class="text-lowercase">${coders[index].email}<br>
//           <tr>`
//         }
// }

export function withFor(coders, tbody) {
  tbody.innerHTML = ``;
  for (let i = 0; i < coders.length; i++) {
    tbody.innerHTML += `  
        <tr>
          <th scope="row">${coders[i].id}</th>
          <td>${coders[i].name}</td>
          <td>${coders[i].lastName}</td>
          <td class="text-lowercase">${coders[i].email}</td>
          <td> 
            <button type="buton" id="delete" data-id=${coders[i].id} class="btn btn-danger">delete</button>
            <button type="buton" data-id= ${coders[i].id} class="btn btn-info">edit</button>
          </td>
        </tr>`;
  }
}

export function create(event, coders, isName, isLastName, isEmail, tbody) {
  event.preventDefault();
  if (form.checkValidity()) {
    console.log(form.checkValidity());
    const tempCoder = {
      id: Date.now(),
      name: isName.value,
      lastName: isLastName.value,
      email: isEmail.value,
    };
    coders.push(tempCoder);
    showSmallAlertSucces("user guardado")
    form.reset();
    form.classList.add("is-invalid");
    withFor(coders, tbody);
  } else {
    console.log("mostrar campos que no estan válidos");
    form.classList.add("was-validated");
  }
}


export function deleteItem (id) {
  console.log(id)
  console.log('hola');
} 

export function btnClear () {
  console.log('xd');
}

