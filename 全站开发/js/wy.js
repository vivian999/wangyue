/**
 * Created by Administrator on 2016/11/2 0002.
 */
$(function () {
    $(':input').focus(function () {
        if ($(this).val() == this.defaultValue) {
            this.value = '';
        }
    }).blur(function () {
            if ($(this).val() == '') {
                this.value = this.defaultValue;
            }
        });
    $('#search-box input').on('keyup',function(event){
        if(event.keyCode==13){
           $(this).val($(this).val());
            $(this).blur();
        }
    });
    var idx=0;
    $('#prev').on('click',function(){
        idx--;
        if(idx==-1){
            idx=$('#img-box li').size()-1;
        }
        $('#img-box').animate({left:-idx*$('#img-box li').eq(0).width()});
    });
    $('#next').on('click',function(){
        idx++;
        if(idx==$('#img-box li').size()){
            idx=0
        }
        $('#img-box').animate({left:-idx*$('#img-box li').eq(0).width()});

    })
});
var oPhoto=document.getElementById('photo');
var aImg=oPhoto.getElementsByTagName('img');
var oLeft=document.getElementById('left');
var oRight =document.getElementById('right');

speed=-2;
setInterval(function(){
    oPhoto.style.left=oPhoto.offsetLeft+speed+'px';
    /*定位后得出的某一点的坐标*/      /*顶点到已定位的父元素的距离*/
    if(oPhoto.offsetLeft<-oPhoto.offsetWidth/2){
        oPhoto.style.left=0;
    }
    if(oPhoto.offsetLeft>0){
        oPhoto.style.left=-oPhoto.offsetWidth/2+'px';
    }
},3);
oLeft.onclick=function(){
    speed=2;
};
oRight.onclick=function(){
    speed=-2;
};
