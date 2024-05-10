import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://uts-qinthar2024-921a0523467e.herokuapp.com/perpustakaan";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}