// eslint-disable-next-line import/prefer-default-export
export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }

  update(): void {
    this.scene.start('MainMenuScene');
  }
}
