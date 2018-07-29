import Phaser from 'phaser';
import DogTreatsGame from './components/Game';

config = { width: 800,
           height: 600,
           renderer: Phaser.AUTO,
           parent: 'game',
           state: null,
         }

DogTreatsGame.new();