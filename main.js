

//Animacion 1
var t1 = just.animate({
    targets: ".derecha",
    duration: 500,
    web: {
        opacity: [0, 1],
        transform: ["translateX(500px)", "translateX(0)"]
    }
});

function derecha(){
t1.play();
just.tools.player(t1);
}

//Animacion 2
var t2 = just.animate({
    targets: ".parpadea",
    duration: 1000,
    web: {
        opacity: [0, 1]
    }
});
function parpadea(){
t2.play();
just.tools.player(t2);
}

            //Animacion 3
    var t3 = just.animate({
        targets: ".salta",
        delay: -500,
        duration: 800,
        easing: "ease-in-out",
        web: {
            y: [0, -30, 5, 0],
            scale: [0.6, { offset: 0.6, value: 1 }, 1],
            filter: {
               value: ["grayscale(.95)", "grayscale(0)"],
               easing: "ease"
            }
        }
    });
    function salta(){
    t3.play({ repeat: Infinity, alternate: true });
    just.tools.player(t3);
    }

                   //Animacion 4
                   var t4 = just.animate({
                    targets: ".respiracion",
                    duration: 6000,
                    easing: "ease-in-out",
                    web: {
                        scale: [1, 1.15, 1]
                    }
                });
                function respiracion(){
                t4.play({ repeat: Infinity, alternate: true });
                just.tools.player(t4);
                }

                           //Animacion 5
                           var t5 = just.animate({
                            targets: ".arriba",
                            duration: 500,
                            easing: "ease-in-out",
                            web: {
                                opacity: [0, 1],
                                transform: ["translateY(-100px)", "translateY(0)"]
                            }
                        });
                        function arriba(){
                        t5.play();
                        just.tools.player(t5);
                        }

                           //Animacion 6
                           var t6 = just.animate({
                            targets: ".izquierda",
                            duration: 500,
                            web: {
                                opacity: [0, 1],
                                transform: ["translateX(-100px)", "translateX(0)"]
                            }
                        });
                        function izquierda(){
                        t6.play();
                        just.tools.player(t6);
                        }

                                   //Animacion 7
                                   var t7 = just.animate({
                                    targets: ".abajo",
                                    duration: 500,
                                    web: {
                                        opacity: [1, 0],
                                        transform: ["translateY(0)", "translateY(100px)"]
                                    }
                                });
                                function abajo(){
                                t7.play();
                                just.tools.player(t7);
                                }
                            
                                //Animacion 8
                                   var t8 = just.animate({
                                    targets: ".gira",
                                    duration: 2000,
                                    web: {
                                        rotateZ: [-400, 0]
                                    }
                                });
                                function gira(){
                                t8.play();
                                just.tools.player(t8);
                                }

                                           //Animacion 9
                                           var t9 = just.animate({
                                            targets: ".girac",
                                            easing: "ease-in-out",
                                            duration: 2000,
                                            web: {
                                                rotateZ: [-400, 0],
                                                scale: [3, 1.5, 3]
                                            }
                                        });
                                        function girac(){
                                        t9.play({ repeat: Infinity, alternate: true });
                                        just.tools.player(t9);
                                        }

       //Animacion 10
       var t10 = just.animate({
        targets: ".mortal",
        delay: -500,
        duration: 800,
        easing: "ease-in-out",
        web: {
            y: [0, -30, 5, 0],
            rotateZ: [-400, 0],
            scale: [0.6, { offset: 0.6, value: 1 }, 1],
            filter: {
               value: ["grayscale(.95)", "grayscale(0)"],
               easing: "ease"
            }
        }
    });
    function mortal(){
    t10.play({ repeat: Infinity, alternate: true });
    just.tools.player(t10);
    }

