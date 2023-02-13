var sn = document.getElementById('sn')
var su = document.getElementById('su')
var btn = document.getElementById('btn')
var tr = document.getElementById('tr')
var sArr ;

(function(){
    if(localStorage.getItem('data')== null) 
    sArr=[]
    else {
        sArr = JSON.parse(localStorage.getItem('data'));
    }
    display(sArr);

})();

btn.onclick = function(){
    if(btn.innerHTML== 'visit') finalUpdate() ;
    else 
    addSite()
}
 
function addSite(){
    sObj = {
        sN:sn.value ,
        sU:su.value
    }
    sArr.push(sObj);
    localStorage.setItem('data',JSON.stringify(sArr))
    display(sArr)
    clearForm()
}

function display(arr){
    box = ``
    for(var i=0;i<arr.length;i++){
        box+=`<tr>
        <td>${i+1}</td>
        <td>${arr[i].sN}</td>
        <td>${arr[i].sU}</td>
        <td><a href="https://${arr[i].sU}" target="_blank"><button class="btn btn-info" >visit<button><a> </td>
        <td> <button class="btn btn-danger" onclick=deleteFn(${i})>delete<button> </td>
        </tr>
        `
    }
    tr.innerHTML=box
}

function deleteFn(index){
    sArr.splice(index,1)
    localStorage.setItem('data',JSON.stringify(sArr))
    display(sArr)

}

function clearForm(){
    sn.value=''
    su.value=''
}

