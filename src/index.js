document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();
    const dogForm = document.getElementById("dog-form");
    dogForm.addEventListener("submit", (e)=> {
        e.preventDefault();
    })
})

function fetchDogs() {

    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(response => renderDogs(dogs))
}
function renderDogs(dogs) {
    const table = document.getElementById("table-body");
    dogs.forEach(dog => {
        let row = document.createElement('tr');
        row.id = dog.id
        row.innerHTML = `
                            <tr>
                            <td>${dog.name}</td>
                            <td>${dog.breed}</td>
                            <td>${dog.sex}</td>
                            <td>
                                <button>Edit</button></td>
                            </tr>
                            `
                            console.log(row)
        table.append(row)
    })
}