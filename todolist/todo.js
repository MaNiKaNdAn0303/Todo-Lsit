ul = document.createElement('list');
console.log(ul)
function start()
{

    li = document.getElementById('element-list');
    li = document.createElement('list');
    btnedit=document.createElement("button")
     btndelete=document.createElement("button")
     btnedit.innerHTML="Edit"
     btndelete.innerHTML="Delete"
     ul.append(li)
     ul.append(btnedit)
     ul.append(btndelete)
     list.insertBefore(li,list.childNodes[0]);
 }
 // delete the given list
function end() {
    var txt = document.getElementById("list");
    txt.remove();
    
    window.location.reload(); 
   }   btnedit.addEventListener("click",(e) => e.target.parentNode.edit())
   btndelete.addEventListener("click",(e) => e.target.parentNode.remove())