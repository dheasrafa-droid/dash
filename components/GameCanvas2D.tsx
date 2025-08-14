import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export default function GameCanvas2D({ graphics }: { graphics: 'high' | 'medium' | 'low' }) {
  const gameRef = useRef<Phaser.Game>();

  useEffect(() => {
    if (gameRef.current) {
      gameRef.current.destroy(true);
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'gameContainer',
      backgroundColor: graphics === 'high' ? '#1a1a2e' : graphics === 'medium' ? '#333366' : '#555555',
      physics: { default: 'arcade', arcade: { gravity: { y: 0 } } },
      scene: {
        preload: function () {
          this.load.spritesheet('player', '/player-sprite.png', { frameWidth: 32, frameHeight: 48 });
        },
        create: function () {
          const player = this.physics.add.sprite(100, 100, 'player');
          player.setCollideWorldBounds(true);

          this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') player.x -= 10;
            if (event.key === 'ArrowRight') player.x += 10;
            if (event.key === 'ArrowUp') player.y -= 10;
            if (event.key === 'ArrowDown') player.y += 10;
          });
        },
        update: function () {}
      }
    };

    gameRef.current = new Phaser.Game(config);

    return () => gameRef.current?.destroy(true);
  }, [graphics]);

  return <div id="gameContainer"></div>;
}
