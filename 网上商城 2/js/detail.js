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
    var $index=0;
    var $a=0;
    $(function(){
        $("#skin li").on("click",function(){
            var $index = $(this).index();
            $(this).addClass("skin"+($(this).index()+1)).siblings().removeClass();/*变成对号*/
            $("#nav").removeClass().addClass("color"+($index+1));/*变色*/
            $("#vary").removeClass().addClass("color"+($index+1));/*拼接字符串变色*/
        });
    });
    /*放大镜*/
    $("#small-pic").on("mouseenter",function(){
        $("#drag").show();
        $("#big-pic").show();
    });
    $("#small-pic").on("mousemove",function(e){
        var $iTop= e.pageY-$("#small-pic").offset().top-$("#drag").height()/2;
        var $iLeft= e.pageX-$("#small-pic").offset().left-$("#drag").width()/2;
        if($iTop<0){
            $iTop=0;
        }else if($iTop>$("#small-pic").height()-$("#drag").height()){
            $iTop=$("#small-pic").height()-$("#drag").height();
        }
        if($iLeft<0){
            $iLeft=0;
        }else if($iLeft>$("#small-pic").width()-$("#drag").width()){
            $iLeft=$("#small-pic").width()-$("#drag").width();
        }
        $("#drag").css({
            top:$iTop,/*定义对象*/
            left:$iLeft
        });
        var $fscaleY=$iTop/($("#small-pic").height()-$("#drag").height());
        var $fscaleX=$iLeft/($("#small-pic").width()-$("#drag").width());
        $("#big-pic img").css({
            top:$fscaleY * ($("#big-pic").height()-$("#big-pic img").height()),
            left:$fscaleX * ($("#big-pic").width()-$("#big-pic img").width())
        });
        $("#small-pic").on("mouseleave",function(){
            $("#drag").hide();
            $("#big-pic").hide();
        })
    });

    /*左边点击三小块*/
    $("#tab-pic li").on("click",function(){
        var $imgSrc=$(this).find("img").attr("src");/*找到小图片的路径*/
        var i=$imgSrc.lastIndexOf(".");/*找到后缀名的起始位置*/
        var suffix=$imgSrc.substring(i);/*找到后缀名*/
        var prefix=$imgSrc.substring(0,i);/*找到前缀名*/
        $("#small-pic img").attr("src",prefix+"_small"+suffix);
        $("#big-pic img").attr("src",prefix+"_big"+suffix);
    });
    /*右边点击三小块*/
    $("#s-color span").on("click",function(){
        $("#color").text($("#s-color span img").eq($(this).index()).prop("alt"));
        var $imgSrc=$(this).find("img").attr("src");/*找到小图片的路径*/
        var i=$imgSrc.lastIndexOf(".");/*找到后缀名的起始位置*/
        var suffix=$imgSrc.substring(i);/*找到后缀名*/
        var prefix=$imgSrc.substring(0,i);/*找到前缀名*/
        $("#small-pic img").attr("src",prefix+"_one_small"+suffix);
        $("#big-pic img").attr("src",prefix+"_one_big"+suffix);
        var newImgSrc=$imgSrc.replace("images/pro_img/","");
        var sImgSrc=newImgSrc.replace(".jpg","");
        $("#tab-pic li").hide();
        $("#tab-pic").find(".tab-pic_"+ sImgSrc).show();
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
        var $p=$c+1;
            $("#evaluate li").on("mouseleave",function(){
            $("#evaluate li:lt("+$p+")").css("background-position-y",-16);/*部分li变成绿色*/
            $("#evaluate li:gt("+($p-1)+")").css("background-position-y",0);/*部分li没色*/
        })
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
