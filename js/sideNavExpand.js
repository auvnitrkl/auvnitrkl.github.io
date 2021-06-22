
var c=0;
var counter=[0,0,0,0,0];

function expand(pos) {
    var myobj=document.getElementsByClassName('mySidenav');
    var myobj2 = myobj[0].getElementsByTagName("a");
    var myobj3 = myobj[0].getElementsByTagName("button");
    for(var i=0; i<5; i++){
      if(i==pos){
        if(counter[i]==0){
          myobj2[i].style.left='0';
          myobj3[i].innerHTML='-';
          myobj3[i].style.left='135px';
          counter[i]=1;
        }
        else{
          myobj2[i].style.left='-135px';
          myobj3[i].innerHTML='+';
          myobj3[i].style.left='-8px';
          counter[i]=0;
        }
      }
      else{
          myobj2[i].style.left='-135px';
          myobj3[i].innerHTML='+';
          myobj3[i].style.left='-8px';
          counter[i]=0;
      }
    }
  }