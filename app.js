(function($, window) {
    window.App = {};

    App = {
        init: function () {
            var w_width = $(window).width(),
                w_height = $(window).height(),
                renderer = PIXI.autoDetectRenderer(w_width, w_height, {transparent: true}),
                stage = new PIXI.Container(),
                texture = new PIXI.Texture.fromImage(),
                x_item = new PIXI.Sprite(texture);

            $("body").append(renderer.view);



            stage.addChild(x_item);

            animate();

            function animate() {
                if(something == something) {

                } else {

                }

                requestAnimationFrame(animate);
                renderer.render(stage);
            }
        }
    };
    App.init();
} ( jQuery, this ));