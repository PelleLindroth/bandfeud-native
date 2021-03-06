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
  YES = 'YES!',
  CORRECT = 'CORRECT!',
  ALREADY_USED = 'ALREADY USED!',
  NOT_FOUND = 'NO SUCH BAND OR ARTIST!',
  OUT_OF_TIME = "TIME'S UP SNAILFINGER!",
  WRONG_LETTER = 'WRONG LETTER!',
}
