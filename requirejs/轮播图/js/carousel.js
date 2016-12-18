define(["jquery"],function($){
    function Carousel(settings){
        this.defaultSettings={
            imgUrl:[],
            spanStyle:"bottom",//center
            tabStyle:"square",
            speed:500,
            location:"body"
        };
        $.extend(this.defaultSettings,settings);
        this.$container=$('<div class="carousel-container"></div>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$tab=$('<ul class="carousel-tabs"></ul>');
        this.$arrows=$('<div class="carousel-arrows"></div>').addClass(this.defaultSettings.spanStyle);
        this.$prev=$('<span class="carousel-arrows-prev">&lt;</span>').addClass(this.defaultSettings.spanStyle);
        this.$next=$('<span class="carousel-arrows-next">&lt;</span>').addClass(this.defaultSettings.spanStyle);
    }
    Carousel.prototype.init=function(){
        var iNow=0;
        var _this=this;
        for(var i=0; i<this.defaultSettings.imgUrl.length; i++){
            this.$imgs.append($("<img src='"+ this.defaultSettings.imgUrl[i] +"'>"));
            this.$tab.append($("<li>"+ (this.defaultSettings.tabStyle == "circle"?"":(i + 1)) +"</li>"));
        }
        $("img:first-child",this.$imgs).addClass("selected");
        $("li:first-child",this.$tab).addClass("selected");
        this.$arrows.append( this.$prev).append(this.$next);
        this.$container.append(this.$imgs).append(this.$tab).append(this.$arrows);
        $(this.defaultSettings.location).append(this.$container);

        $("li",this.$tab).addClass(this.defaultSettings.tabStyle);
        $("li",this.$tab).on("click",function(){
            iNow=$(this).index();
            changeImg();
        });
        this.$prev.on("click",function(){
            iNow--;
            if(iNow==-1){
               iNow=_this.defaultSettings.imgUrl.length-1
            }
            changeImg();
        });

        this.$next.on("click",function(){
            iNow++;
            if(iNow==_this.defaultSettings.imgUrl.length){
                iNow=0
            }
            changeImg();
        });
        play();
        _this.$container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            play();
        });
        function play(){
            _this.timer=setInterval(function(){
                _this.$next.trigger("click");
            },_this.defaultSettings.speed)
        }
        function changeImg(){
            $("img",_this.$imgs).eq(iNow).addClass("selected").siblings().removeClass("selected");
            $("li",_this.$tab).eq(iNow).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});

