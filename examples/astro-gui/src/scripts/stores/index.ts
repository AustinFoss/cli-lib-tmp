import { atom } from 'nanostores';

import { myCommand } from "@austinfoss/cli-lib-tmp";

export const counter = atom(0);
export const echoed = atom('Placeholder');

export const echo = (sound:string) => {
  myCommand(sound)
  echoed.set(sound)
}
