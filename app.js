(function($, window) {
    window.App = {};

    App = {
        init: function () {
            var w_width = $(window).width() - 100,
                w_height = $(window).height() - 90,
                renderer = PIXI.autoDetectRenderer(w_width, w_height, {transparent: false}),
                stage = new PIXI.Container();

            var texture = [new PIXI.Texture.fromImage("assets/1.png"),
                new PIXI.Texture.fromImage("assets/2.png"),
                new PIXI.Texture.fromImage("assets/3.png")];

            var unknownCard = PIXI.Texture.fromImage("assets/back.png");
            showDeck(texture, unknownCard, stage);
            renderer.backgroundColor = 0x6699ff;
            document.getElementById('container').appendChild(renderer.view);
            animate();
            function animate() {


                requestAnimationFrame(animate);
                renderer.render(stage);

            }
        }
    };
    App.init();
} ( jQuery, this ));


function shuffleFunc(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function showDeck(texture, unknownCard, stage) {
    var cards;
    var iniDeck = shuffleFunc(texture);
    var backCard = new PIXI.Sprite(unknownCard);
    var position = 20;
    for (cards in iniDeck) {
        backCard.position.x = position;
        backCard.position.y = 50;
        stage.addChild(backCard);
        position += 50;

    }
}