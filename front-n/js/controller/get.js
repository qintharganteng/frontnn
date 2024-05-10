
import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#ID#", value._id)
            .replace("#Nama#", value.nama)
            .replace("#alamat#", value.alamat)
            .replace("#no_telp", value.no_telp)
            .replace("#membership_id#", value.membership_id);
        
            const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        // Create a new row element
        let newRow = document.createElement('tr');
        newRow.innerHTML = content; // Set content to the new row
        tableBody.appendChild(newRow); // Append the new row to the tbody
    }
}

function clearTable() {
    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = ''; // Clear the inner HTML of the tbody
    }
}