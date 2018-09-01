var headerNav=document.getElementsByClassName("headerNav")[0];
var navsce=headerNav.getElementsByClassName("navsce");
for(let i=0;i<navsce.length;i++){
    navsce[i].onmouseover=function(){
        this.style.borderBottomColor="rgb(0, 179, 138)"  ;
        this.style.borderBottomStyle="solid"  ;
        this.style.borderBottomWidth="1px"  ;
    }
    navsce[i].onmouseout=function(){
        this.style.borderBottom="none"  ;
    }
}
var movbox=document.getElementsByClassName("movbox")[0];


window.onscroll= function() {
    var mH = document.documentElement.scrollTop;
    console.log(mH);
    if(mH>800){
        movbox.style.display="none"
    }else{
        movbox.style.display="block"
    }
}




