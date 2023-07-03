let dataArray = ['HTML', 'CSS', 'JavaScript', 'C', 'C++', "C#", 'Python', 'Java'];
let filteredData = [];
let toHtml = [];
const list = document.getElementById('resultTable');
const search = document.getElementById('searchInput');


function searchInput(e) {
    filteredData = dataArray.filter((item) => item.toLowerCase().includes(e.toLowerCase()));
    list.innerHTML = '';
    rederData(); 
}
rederData();

function rederData(){
    if (filteredData.length) {
        toHtml = filteredData
    } else {
        toHtml = dataArray
    }
    for (let i of toHtml) {
        let item = document.createElement('li');
        item.innerHTML = i;
        list.appendChild(item)
    }
    if(search.value && !filteredData.length){
        list.innerHTML='No Data Found';
    }
}