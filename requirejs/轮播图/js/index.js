requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","carousel"],function($,Carousel){
    var imgs=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings= {
        imgUrl:imgs,
        spanStyle:"bottom",//center
        tabStyle:"square",
        speed:500,
        location:"#container1"
    };
    var carousel=new Carousel(settings);
    carousel.init();


    var settings1= {
        imgUrl:imgs,
        spanStyle:"center",//bottom
        tabStyle:"circle",//square
        speed:1000,
        location:"#container2"
    };
    var carousel1=new Carousel(settings1);
    carousel1.init();
});