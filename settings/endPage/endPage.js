//结束画面
function endPage() {
    var stage = game.createStage();
    //游戏结束
    stage.createItem({
        x: game.width / 2,
        y: game.height * .35,
        draw: function (context) {
            context.fillStyle = '#FFF';
            context.font = 'bold 48px Helvetica';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(_LIFE ? 'YOU WIN!' : 'GAME OVER', this.x, this.y);
        }
    });
    //记分
    stage.createItem({
        x: game.width / 2,
        y: game.height * .5,
        draw: function (context) {
            context.fillStyle = '#FFF';
            context.font = '20px Helvetica';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('FINAL SCORE: ' + (_SCORE + 50 * Math.max(_LIFE - 1, 0)), this.x, this.y);
        }
    });
    //事件绑定
    stage.bind('keydown', function (e) {
        switch (e.keyCode) {
            case 13: //回车
            case 32: //空格
                _SCORE = 0;
                _LIFE = 5;
                game.setStage(1);
                break;
        }
    });
};