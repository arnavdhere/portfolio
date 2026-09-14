import GameEnvBackground from '@assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '@assets/js/GameEnginev1.1/essentials/Player.js';
import Npc from '@assets/js/GameEnginev1.1/essentials/Npc.js';
import Projectile from '@assets/js/GameEnginev1.1/Projectile.js';

class GameLevelStarWars {
  constructor(gameEnv) {
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_bankvault = path + "/images/projects/bankgame/bankvault.png"; // be sure to include the path
    const image__data_bankvault = {
        id: 'BankVault',
        src: image_src_bankvault,
        pixels: {height: 570, width: 1025}
    };

    // Player data for snowspeeder
    const sprite_src_robber = path + "/images/projects/bankgame/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_robber = {
        id: 'Robber',
        name: 'mainplayer',
        greeting: "Hi I am a bank robber. I am trying to get rich quick.  I need to get to the bank and get the money before the police catch me.",
        src: sprite_src_robber,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0.0, y: 0.9 },  // 0% from left, 90% from top (near bottom)
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.4 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // List of objects definitions for this level
    this.classes = [
      { class: GameEnvBackground, data: image__data_bankvault },
      { class: Player, data: sprite_data_robber },
    ];
  }
}

export default GameLevelStarWars;