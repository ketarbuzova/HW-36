// редагування тексту
let myText = "Відредагуйте та бережіть ваш текст за допомогою клавіш Ctrl + S";
let div = document.getElementById('div');
let textarea = document.getElementById('textarea');

div.textContent = myText;
textarea.value = myText;

/* document.addEventListener('keydown', function (event) { 
    if (e.code == 'KeyE' && e.ctrlKey) { 
        e.preventDefault(); 
    }  
}); */

document.addEventListener('keydown', function (event) { 
    if (e.code == 'KeyS' && e.ctrlKey) { 
        e.preventDefault(); 
        myText = textarea.value; 
        div.textContent = myText;
    }    
});

// таблиця
th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){
    th[c].addEventListener('click', item(c))
}

function item(c){
    return function(){
        console.log(c)
        sortTable(c)
    }
}

function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[c];
                y = rows[i + 1].getElementsByTagName("TD")[c];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
            break;
            }}
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }}
}