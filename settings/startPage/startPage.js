//启动页
function startPage() {
    var stage = game.createStage();
    //logo
    stage.createItem({
        x: game.width / 2,
        y: game.height * .45,
        width: 100,
        height: 100,
        frames: 3,
        draw: function (context) {
            var t = Math.abs(5 - this.times % 10);
            context.fillStyle = '#FFE600';
            context.beginPath();
            context.arc(this.x, this.y, this.width / 2, t * .04 * Math.PI, (2 - t * .04) * Math.PI, false);
            context.lineTo(this.x, this.y);
            context.closePath();
            context.fill();
            context.fillStyle = '#000';
            context.beginPath();
            context.arc(this.x + 5, this.y - 27, 7, 0, 2 * Math.PI, false);
            context.closePath();
            context.fill();
        }
    });
    //游戏名
    stage.createItem({
        x: game.width / 2,
        y: game.height * .6,
        draw: function (context) {
            context.font = 'bold 42px Helvetica';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#FFF';
            context.fillText('Pac-Man', this.x, this.y);
        }
    });
    //事件绑定
    stage.bind('keydown', function (e) {
        switch (e.keyCode) {
            case 13:
            case 32:
                game.nextStage();
                break;
        }
    });
};