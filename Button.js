

var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');

var addtab = document.getElementById('deeltje1').style.display;
var buttonedit = document.getElementsByClassName('editbut');
var edittab = buttonedit[0].style.display;
var deltabje = document.getElementsByClassName('delbut');
var deltab = deltabje[0].style.display;

function add(){
    var deeltje = document.getElementById('deeltje1');
    //Check of de display op none staat of niet
    if(deeltje.style.display === 'none'){
        document.getElementById('deeltje1').setAttribute("style", "display:block");
        //Voegt een extra class toe
        tab1.className += " added1";
    } else {
        deeltje.style.display = 'none';
        //Verwijderd de extra classs
        tab1.classList.remove("added1");
    }
}

function editCon(){
    var editbutton = document.getElementsByClassName('editbut');
    var edit = editbutton[0].style.display;
    if(edit === 'none'){
        editbutton[0].style.display = 'block';
        editbutton[1].style.display = 'block';
        tab2.className += " added2";
    }else {
        editbutton[0].style.display = 'none';
        editbutton[1].style.display = 'none';
        tab2.classList.remove("added2");
    }
}

function del() {
    var delbutton = document.getElementsByClassName('delbut');
    var del1 = delbutton[0].style.display;

    if(del1 === 'none'){
        delbutton[0].style.display = 'block';
        delbutton[1].style.display = 'block';
        tab3.className += " added3";
    } else {
        delbutton[0].style.display = 'none';
        delbutton[1].style.display = 'none';
        tab3.classList.remove("added3");
    }
}

function removeStuff(){
    var delbutton = document.getElementsByClassName('delbut');
    var del1 = delbutton[0].style.display;
    var editbutton = document.getElementsByClassName('editbut');
    var edit = editbutton[0].style.display;
    var deeltje = document.getElementById('deeltje1');
    tab1.classList.remove("added1");
    deeltje.style.display = 'none';
    tab2.classList.remove("added2");
    editbutton[0].style.display = 'none';
    editbutton[1].style.display = 'none';
    tab3.classList.remove("added3");
    delbutton[0].style.display = 'none';
    delbutton[1].style.display = 'none';
}

tab1.addEventListener("click", addContent);
tab2.addEventListener("click", editContent);
tab3.addEventListener("click", deleteContent);

function addContent(){
    removeStuff();
    add();
}

function editContent(){
    removeStuff();
    editCon();
}

function deleteContent(){
    removeStuff();
    del();
}


var btn = document.querySelector('.js-btn');
var el = document.querySelector('.js-fade');

btn.addEventListener('click', function(e){
    el.classList.remove('is-paused');
});