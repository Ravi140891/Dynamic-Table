const formEl = document.querySelector('.form');
const tbodyEl = document.querySelector('.tbody');
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#number");
const tableEl = document.querySelector(".table");

function createTable(e){
    e.preventDefault();
    const newName = nameEl.value;
    const newEmail = emailEl.value;
    const newPhone = phoneEl.value;
    tbodyEl.innerHTML += `
                <tr>
                <td class="name-td">${newName}</td>
                <td class="mail-td">${newEmail}</td>
                <td class="num-td">${newPhone}</td>
                <td class="btn-td"><button class="btn delete-btn">Delete</button></td>
                </tr>`

    nameEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";       
}

function deleteRow(e){
    if(!e.target.classList.contains("delete-btn")){
        return;
    } 
    const btn = e.target;
    btn.closest('tr').remove();
}

formEl.addEventListener('submit', createTable);

tableEl.addEventListener('click', deleteRow);

