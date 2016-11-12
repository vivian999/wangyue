/**
 * Created by Administrator on 2016/11/5 0005.
 */
$(function(){
    /*导航菜单*/
    $("#nav li").hover(function(){
        $(this).find(".pull").show();
    },function(){
        $(this).find(".pull").hide();
    });
    /*失去获取焦点*/
    $("#input input").on("focus",function(){
        if(this.value==this.defaultValue) {
            this.value = "";
        }
    }).on("blur",function(){
        if(this.value==""){
            this.value=this.defaultValue;
        }
    });
    /*Enter键失去焦点*/
    $("#input input").on("keyup",function(){
        if(event.keyCode==13){
            //$(this).val($('#head input').val());
            $(this).blur()
        }
    });
    /*变颜色*/
 $(function(){
     $("#skin li").on("click",function(){
         $(this).addClass("skin"+($(this).index()+1)).siblings().removeClass();
         $("#nav").removeClass().addClass("color"+($(this).index()+1));
         $("#vary").removeClass().addClass("color"+($(this).index()+1));
     })
 })
    /*大轮播图*/
    var timer;
    var index=0;
    var iNow=0;
    function changeImg(idx){
        $("#pic img").eq(idx).addClass("selected").siblings().removeClass("selected");
        $("#btn li").eq(idx).addClass("selected").siblings().removeClass("selected");
        $index=$(this).index();
    }
    $("#btn li").on("mouseover",function(){
       $index= $(this).index();
        changeImg($index);
    });
    function run(){
       timer=setInterval(function(){
            index++;
            if(index==6){
                index=0;
            }
            changeImg(index);
        },1000)
    }
    $("#shift").hover(function(){
        clearInterval(timer);
    },function(){
        run();
    })
    run();
    /*鞋轮播图*/
    var index=0;
    $("#navigator li").on("mouseover",function(){
        $(this).addClass('select').siblings().removeClass("select");
        $index=$(this).index();
       $(".peel").animate({left:-$(this).index()*791})
    })
    $("#navigator li").on("mouseout",function(){
        $("#navigator li").removeClass("select")
    })
});