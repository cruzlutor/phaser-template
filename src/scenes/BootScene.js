class BootScene extends Phaser.Scene {
	constructor() {
		super('bootScene');
	}

	preload() {}

	create() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
		this.scene.start('gameScene');
	}

	resize() {
		const { innerWidth, innerHeight } = window;
		const { minWidth, minHeight } = this.sys.game.config;

		let width = Math.round(minWidth);
		let height = Math.round((innerHeight * width) / innerWidth);

		if (height < minHeight) {
			height = Math.round(minHeight);
			width = Math.round((innerWidth * height) / innerHeight);
		}

		this.game.canvas.style.width = innerWidth + 'px';
		this.game.canvas.style.height = innerHeight + 'px';
		this.game.scale.resize(width, height);
		this.cameras.resize(width, height);

		for (let scene of this.scene.manager.scenes) {
			if (scene.scene.settings.active && scene.resizeField) {
				scene.resizeField(width, height);
			}
		}
	}
}

export default BootScene;
