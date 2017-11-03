
allDiv=3;
function showDv(n){
    for(i=1;allDiv+1>i;i++){
    document.getElementById('d'+i).style.visibility = 'hidden';
    }
    document.getElementById('d'+n).style.visibility = 'visible';
}
