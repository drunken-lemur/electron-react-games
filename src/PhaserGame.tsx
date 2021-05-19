import 'Phaser';
import React from 'react';

export interface PhaserGameProps {
  config: Phaser.Types.Core.GameConfig;
}

const PhaserGame = ({ config }: PhaserGameProps) => {
  const game: React.MutableRefObject<Phaser.Game | null> = React.useRef(null);
  const parent = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (parent.current && !game.current) {
      game.current = new Phaser.Game({ ...config, parent: parent.current });
    }

    return () => {
      if (game.current) {
        game.current.destroy(true);
        game.current = null;
      }
    };
  }, [config]);

  return <div ref={parent} />;
};

export default PhaserGame;
