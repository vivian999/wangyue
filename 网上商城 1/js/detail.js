/**
 * Created by Administrator on 2016/11/8 0008.
 */
$(function(){
    /*导航菜单*/
    $("#nav li").hover(function(){
        $(this).find(".pull").show();/*找到li下边的孩子叫pull的，展示*/
    },function(){
        $(this).find(".pull").hide();/*找到li下边的孩子叫pull的，隐藏*/
    });
    /*失去获取焦点*/
    $("#input input").on("focus",function(){
        if(this.value==this.defaultValue) {
            this.value = "";/*清空*/
        }
    }).on("blur",function(){
        if(this.value==""){
            this.value=this.defaultValue;/*默认值*/
        }
    });
    /*Enter键失去焦点*/
    $("#input input").on("keyup",function(){
        if(event.keyCode==13){
            //$(this).val($('#head input').val());
            $(this).blur()
        }
    });
    /*header变颜色*/
    $(function(){
        $("#skin li").on("click",function(){
            var $index = $(this).index();
            $(this).addClass("skin"+($(this).index()+1)).siblings().removeClass();/*变成对号*/
            $("#nav").removeClass().addClass("color"+($index+1));/*变色*/
            $("#vary").removeClass().addClass("color"+($index+1));/*拼接字符串变色*/
        });
    });
    var $index=0;
    var $a=0;
    /*右边点击三小块*/
    $("#s-color span").on("click",function(){
        $index=$(this).index();
        $("#small-pic div").eq($index).show().siblings().hide();/*通过索引找到图片并显示，兄弟姐妹隐藏*/
        $("#tab-pic div").eq($index).show().siblings().hide();
        $("#color").text($(this).text());
    });
    /*左边点击三小块*/
    $("#tab-pic div li").on("click",function(){
        $a=$(this).index();
        $("#small-pic div").eq($index).children().eq($a).show().siblings().hide();/*通过索引找到图片并显示，兄弟姐妹隐藏*/
    });
    /*尺寸大小*/
    $("#size li").on("click",function(){
        $(this).addClass("orange").siblings().removeClass();/*变色*/
        $("#choice").text($(this).text());/*将text放入text中*/
    });
    /*下拉列表计算*/
    $("#opt").on("change",function(){
        $("#total").text(200*$("#opt").val());/*将val放入text中*/
    });
    /*星星评价*/
    //var $c=0;
    //$("#evaluate li").hover(function(){
    //    $c=$(this).index();
    //    $("#evaluate").css("background-position-y",-(96+$c*16));
    //},function(){
    //    $("#evaluate").css("background-position-y",0);
    //});
    //$("#evaluate li").on("click",function(){
    //    $("#evaluate li").off("mouseleave");
    //    alert("您给此商品的评价是："+($c+1));
    //        var $p=$c+1;
    //    $("#evaluate").css("background-position-y",-$p*16);
    //    $("#evaluate li").on("mouseleave",function(){
    //        $("#evaluate").css("background-position-y",-$p*16);
    //    })
    //});
    var $c=0;
    $("#evaluate li").hover(function(){
        $c=$(this).index();
        $("#evaluate li:lt("+($c+1)+")").css("background-position-y",-96);/*部分li变成黄色*/
        $("#evaluate li:gt("+$c+")").css("background-position-y",0);/*部分li没色*/
    },function(){
        $("#evaluate li").css("background-position-y","");/*全部li没色*/
    });
    $("#evaluate li").on("click",function(){
        $("#evaluate li").off("mouseleave");/*清除鼠标离开事件*/
        alert("评价："+($c+1)+"分");
        $("#evaluate li:lt("+($c+1)+")").css("background-position-y",-16);/*部分li变成绿色*/
        var $p=$c+1;/*定义变量记录下来*/
            $("#evaluate li").on("mouseleave",function(){
            $("#evaluate li:lt("+$p+")").css("background-position-y",-16);/*部分li变成绿色*/
            $("#evaluate li:gt("+($p-1)+")").css("background-position-y",0);/*部分li没色*/
        })
    });

    /*放大镜*/
    $("#mask").on("mousemove",function(e){
        e = e||window.event;
        var Y= e.pageY-$("#small-pic").offset().top-$('#drag').height()/2;/*小图片移动后的位置*/
        var X= e.pageX-$("#small-pic").offset().left-$('#drag').width()/2;
        if(Y<0){/*设置上下左右的范围*/
            Y=0;
        }else if(Y>$("#small-pic").height()-$("#drag").height()){
            Y=$("#small-pic").height()-$("#drag").height();
        }
        if(X<0){
            X=0;
        }else if(X>$("#small-pic").width()-$("#drag").width()){
           X=$("#small-pic").width()-$("#drag").width();
        }
        $("#drag").show().css("top",Y).css("left",X);/*小图片赋值*/
        var iTop=Y/($("#small-pic").height()-$("#drag").height())*($("#big-pic").height()-$("#big-pic div").eq($index).children().eq($a).height());
        /*大图片移动后位置*/
        var iLeft=X/($("#small-pic").width()-$("#drag").width())*($("#big-pic").width()-$("#big-pic div").eq($index).children().eq($a).width());
        $("#big-pic").show();
        $("#big-pic div").eq($index).show().siblings().hide().end().children().eq($a).show().css("top",iTop).css("left",iLeft).siblings().hide();
        /*大图片赋值*/
        return false;
    });
    $("#mask").on("mouseleave",function(){
        $("#drag").hide();/*鼠标离开后隐藏*/
        $("#big-pic").hide();
    });
    /*选项卡*/
    $("#menu .main-menu li").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");/*li变色*/
        $("#menu .sub-menu div").eq($(this).index()).show().siblings().hide();/*切换内容*/
    });
    /*观看清晰图片*/
    $("#look").on("click",function(){
    });
    /*放入购物车*/
    $("#shopping").on("click",function(){
    });
});
