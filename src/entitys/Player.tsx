export interface Player {
  name: string;
  janoDolares: number;
  password: string;
}

let ActualPlayer: Player;

export function setActualPlayer(player: Player) {
  ActualPlayer = player;
}

export function getActualPlayer() {
  return ActualPlayer;
}

export function getName() {
  return ActualPlayer.name;
}

export function setName(newName: string) {
  ActualPlayer.name = newName;
}

export function getJanoDolares() {
  return ActualPlayer.janoDolares;
}

export function setJanoDolares(janoDolares: number) {
  ActualPlayer.janoDolares = janoDolares;
}