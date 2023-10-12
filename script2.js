function SHOW(){
    let p = document.getElementById('panel');
    let a = document.getElementById('menu');
    if(a.style.display != 'none'){
        a.style.display = 'none';
    }
    if(p.style.display != 'none'){
        p.style.display = 'none';
    }
    else{
        p.style.display = 'inline-block';
    }
}
function show2(){
    let a = document.getElementById('menu');
    let p = document.getElementById('panel');
    if(p.style.display != 'none'){
        p.style.display = 'none';
    }
    if(a.style.display != 'none'){
        a.style.display = 'none';
    }
    else{
        a.style.display = 'inline-block';
    }

}
