requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function(){
        var setting={
            width:200,
            height:100,
            title:"ÎÒµÄµ¯³ö²ã",
            content:"bbb",
            background:"red"
        };
        var dialog=new Dialog(setting);
        dialog.open();
        var dialog1=new Dialog(setting);
        dialog1.open();
    })
});