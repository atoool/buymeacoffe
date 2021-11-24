import {setItem} from './Storage';

export function delayNStore(key, val) {
  try {
    setTimeout(async () => await setItem(key, val), 10);
  } catch {}
}
