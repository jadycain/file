console.log('ok');

TweenMax.to('.box1', 2, {
    // x: 800,
    width: '100%',
    // perspective:500,
    ease: Quad.easeOut,
    // autoAlpha: 0,
    // opacity: 0
    // rotation : 360,
    // transformOrigin : 'right bottom' ,//定位點

    // scale: 2
    // scaleX: 2
    // repeat : -1,
    // yoyo: true,
    // repeatDelay:1 
    // ease: SlowMo.ease.config(0.7, 0.7, false)
    // ease: Bounce.easeOut,
    // ease: Elastic.easeOut
    // ease: Power4.easeOut
});

TweenMax.fromTo('.box2', 3, {
    x: 300
}, {
    x: 700,
    ease: Elastic.easeOut
});



function animation() {
    TweenMax.staggerTo('.box3', 1, {
        x: 50,
        opacity: 1,
        ease: Bounce.easeOut,
    }, 0.3);
}


var tl = new TimelineMax({
    repeat: 1,
    yoyo: true
});

tl.to('.box4', 1, {
    x: 100
}).to('.box4', 1, {
    y: 100
}).to('.box5', 1, {
    x: 200
});

TweenMax.to('.box4' ,2 , {
    repeat:-1,
    rotationY : 360,
    transformOrigin : 'left  50% -700' ,//定位點
    transformPerspective: 100


})

TweenMax.to('.bezier', 2, {
    bezier: {
        values: [{
                x: 0, //節點1
                y: 0
            },
            {
                x: 600,
                y: 600
            },
            {
                x: 300,
                y: 400
            },{
                 x: 200,
                 y: 100
            }
              
        ],
        autoRotate : false // 方向
    },
    ease : Elastic.easeOut

})


//sccrollMagic--------------------
//加入controller
var controller = new ScrollMagic.Controller();


//第一個場景
var scroll01 =  TweenMax.to('.scroll01' , 1 , {
    x: 200,
    y: 200
});




 new ScrollMagic.Scene({
    triggerElement : '#trigger01',
    offset : 0, //start1
    // triggerHook: 0 // triggerHook:0會固定在最上面(trigger01)
 }).setTween(scroll01)
 .addIndicators() // 觸發點指標
 .addTo(controller);


 //第三個場景
 var cssbox =  TweenMax.to('.scrollcss' , 1 , {
    y: 300,
    x: 300
  })

 new ScrollMagic.Scene({
    triggerElement: '#trigger02',
    triggerHook: 0
}).setClassToggle('.section_03', 'on').setTween(cssbox).addIndicators().addTo(controller);


//第四個場景
var timelinemaxMv = new TimelineMax();


timelinemaxMv.to('.stick01' , 1 , {x: 300}).to('.stick02' , 1 , {x: 300}).to('.stick03' , 1 , {x: 300});

new ScrollMagic.Scene({
    triggerElement: '#trigger03',
    triggerHook: 0,
    duration: '300%'
}).setPin('.section_04').setTween(timelinemaxMv).addIndicators().addTo(controller);