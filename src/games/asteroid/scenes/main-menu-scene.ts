import path from 'path';
import { CONST } from '../const/const';

const asset = (...files: string[]) =>
  path.join(__dirname, 'games', 'asteroid', 'assets', ...files);

// eslint-disable-next-line import/prefer-default-export
export class MainMenuScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;

  private static readonly fontName = 'asteroidFont';

  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: 'MainMenuScene',
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );

    // reset score, highscore and player lives
    if (CONST.SCORE > CONST.HIGHSCORE) {
      CONST.HIGHSCORE = CONST.SCORE;
    }
    CONST.SCORE = 0;
    CONST.LIVES = 3;
  }

  // eslint-disable-next-line class-methods-use-this
  preload(): void {
    this.load.bitmapFont(
      MainMenuScene.fontName,
      asset('font', 'asteroidFont.png'),
      asset('font', 'asteroidFont.fnt')
    );
  }

  create(): void {
    // this.texts.push(
    //   this.add.text(
    //     this.sys.canvas.width / 2 - 150,
    //     this.sys.canvas.height / 2 + 40,
    //     'PRESS S TO PLAY'
    //   )
    // );
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 150,
        this.sys.canvas.height / 2 + 40,
        MainMenuScene.fontName,
        'PRESS S TO PLAY',
        45
      )
    );

    // this.texts.push(
    //   this.add.text(
    //     this.sys.canvas.width / 2 - 150,
    //     this.sys.canvas.height / 2 - 60,
    //     'A S T E R O I D'
    //   )
    // );
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 150,
        this.sys.canvas.height / 2 - 60,
        MainMenuScene.fontName,
        'A S T E R O I D',
        80
      )
    );

    // this.texts.push(
    //   this.add.text(
    //     this.sys.canvas.width / 2 - 150,
    //     this.sys.canvas.height / 2 + 80,
    //     `HIGHSCORE: ${CONST.HIGHSCORE}`
    //   )
    // );
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 150,
        this.sys.canvas.height / 2 + 80,
        MainMenuScene.fontName,
        `HIGHSCORE: ${CONST.HIGHSCORE}`,
        45
      )
    );
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
