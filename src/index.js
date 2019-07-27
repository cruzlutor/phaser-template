import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import constants from './constants';

var config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	minWidth: 420,
	minHeight: 800,
	backgroundColor: 0x25131a,
	physics: {
		default: 'arcade',
		debug: true
	},
	scene: [BootScene, GameScene],
	scale: {
		mode: Phaser.Scale.NONE,
	},
};

const game = new Phaser.Game(config);
