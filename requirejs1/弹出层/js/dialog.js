/**
 * Created by Administrator on 2016/12/8 0008.
 */
define(["jquery"],function($){
    function Dialog(settings){
        this.defaultSetting={
            width:400,
            height:300,
            title:"弹出层",
            content:"nnn",
            background:"green"
        };
        $.extend(this.defaultSetting,settings);
        this.$container=$('<div class="dialog-container"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$box=$('<div class="dialog-box"></div>');
        this.$title=$('<div class="dialog-title"></div>');
        this.$item=$('<div class="dialog-title-item"></div>');
        this.$close=$('<div class="dialog-title-close">[X]</div>');
        this.$content=$('<div class="dialog-content"></div>');

    }
    Dialog.prototype.open=function(){
        this.$container.append(this.$mask).append(this.$box);
        this.$box.css({
            width:this.defaultSetting,
            height:this.defaultSetting
        }).append(this.$title).append(this.$content);
        this.$title.html(this.defaultSetting.title).append(this.$item).append(this.$close);
        this.$content.html(this.defaultSetting.content).css({
            background:this.defaultSetting.background
        });
        if(this.defaultSetting.content){
            this.$content.css({
                background:this.defaultSetting
            }).load(this.defaultSetting.content)
        }
        $("body").append(this.$container);
        var self=this;
        this.$close.on("click",function(){
            self.close();
        })

    };
    Dialog.prototype.close=function(){
        $(this.$container).remove();
    };
    return Dialog;
});