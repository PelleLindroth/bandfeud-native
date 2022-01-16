export enum Time {
  short = 1000,
  medium = 2000,
  long = 3000,
}

export enum Message {
  EMPTY = '',
  TYPE = 'PRESS TO TYPE',
  WAITING = 'WAITING FOR OPPONENT...',
  PLAY = 'PRESS TO PLAY',
  OPPONENT = 'OPPONENT PLAYED',
  GET_READY = 'GET READY...',
  CHECKING = 'CHECKING...',
  CORRECT = 'CORRECT!',
  ALREADY_USED = 'Already used!',
  NOT_FOUND = 'No such band or artist!',
  OUT_OF_TIME = "Time's up, snailfinger!",
  WRONG_LETTER = 'Wrong letter!',
  PLAY_AGAIN = 'Play again',
}
