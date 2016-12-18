requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","carousel"],function($,Carousel){
    var imgs=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var setting1={
        imgUrl:imgs,
        arrowsStyle:"bottom",
        tabStyle:"square",
        location:"#container1",
        speed:500
    };
    var carousel1=new Carousel(setting1);
    carousel1.init();
    var setting2={
        imgUrl:imgs,
        arrowsStyle:"center",
        tabStyle:"circle",
        location:"#container2",
        speed:1000
    };
    var carousel2=new Carousel(setting2);
    carousel2.init();
});