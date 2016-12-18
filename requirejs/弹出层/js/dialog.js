/**
 * Created by Administrator on 2016/12/8 0008.
 */
define(["jquery"],function($){
    function Dialog(settings){//类
        this.defaultSetting={
            width:400,
            height:300,
            title:"弹出层",
            content:"nnn",/*如果为空并没传入任何值，将把自己传入*/
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
        this.$item.html(this.defaultSetting.title);
        this.$title.append(this.$item).append(this.$close);
        if(this.defaultSetting.content){
            this.$content.css({
                background:this.defaultSetting.background
            }).load(this.defaultSetting.content)
        }//空字符串根本就不执行上边这句话 添加
        //有内容了才执行，因为没有内容为空字符串就会加载它自己本身
        $("body").append(this.$container);
        //var self=this;
        this.$close.on("click",function(){
            this.close();
        }.bind(this))

    };
    Dialog.prototype.close=function(){
        $(this.$container).remove();
    };
    return Dialog;
});