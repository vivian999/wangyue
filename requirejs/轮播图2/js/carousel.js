define(["jquery"],function($){
    function Carousel(settings) {
        this.defaultSetting = {
            width:520,
            height:280,
            imgUrl: [],
            arrowsStyle: "bottom",
            tabStyle: "square",
            location: "body",
            speed: 500
        };
        $.extend(this.defaultSetting, settings);
        this.$container = $("<div class='carousel-container'></div>");
        this.$imgs = $("<div class='carousel-imgs'></div>");
        this.$tabs = $("<ul class='carousel-tabs'></ul>");
        this.$arrows = $("<div class='carousel-arrows'></div>").addClass(this.defaultSetting.arrowsStyle);
        this.$prev = $("<span class='carousel-arrows-prev'>&lt;</span>").addClass(this.defaultSetting.arrowsStyle);
        this.$next = $("<span class='carousel-arrows-next'>&gt;</span>").addClass(this.defaultSetting.arrowsStyle);
    }
    Carousel.prototype.init=function() {
        var iNow = 0;
        var _this = this;
        for (var i = 0; i < this.defaultSetting.imgUrl.length; i++) {
            this.$imgs.append($('<img src="' + this.defaultSetting.imgUrl[i] + '">'));
            this.$tabs.append($('<li>' +(this.defaultSetting.tabStyle=="circle"?"":(i + 1))+ '</li>'));
        }
        $("li:first-child", this.$tabs).addClass("selected");
        $("img:first-child", this.$imgs).addClass("selected");
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.css({
            width:this.defaultSetting.width,
            height:this.defaultSetting.height
        }).append(this.$imgs).append(this.$tabs).append(this.$arrows);
        $(this.defaultSetting.location).append(this.$container);



        $("li",this.$tabs).addClass(this.defaultSetting.tabStyle);
        $("li",this.$tabs).on("click",function(){
            iNow=$(this).index();
            changeImg();
        });
        this.$prev.on("click",function(){
            iNow--;
            if(iNow==-1){
                iNow=_this.defaultSetting.imgUrl.length-1;
            }
            changeImg();
        });
        this.$next.on("click",function(){
            iNow++;
            if(iNow==_this.defaultSetting.imgUrl.length){
                iNow=0;
            }
            changeImg();
        });
        this.$container.hover(function(){
            clearInterval(_this.timer)
        },function(){
            play();
        });
        play();
        function changeImg(){
            $("li",_this.$tabs).eq(iNow).addClass("selected").siblings().removeClass("selected");
            $("img",_this.$imgs).eq(iNow).addClass("selected").siblings().removeClass("selected");
        }
        function play(){
            _this.timer=setInterval(function(){
                _this.$next.trigger("click");
            },_this.defaultSetting.speed)
        }
    };
    return Carousel;
});


