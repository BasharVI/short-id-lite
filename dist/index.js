import { randomBytes } from 'crypto';
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const DEFAULT = 6;
const MIN = 3;
const MAX = 32;
export function shortId(length = DEFAULT) {
  if (!Number.isInteger(length))
    throw new TypeError('length must be an integer');
  if (length < MIN || length > MAX)
    throw new RangeError(`length must be between ${MIN} and ${MAX}`);
  let id = '';
  while (id.length < length) {
    const bytes = randomBytes(length - id.length);
    for (let i = 0; i < bytes.length && id.length < length; i++) {
      const b = bytes[i];
      if (b < 248)
        id += CHARSET[b % CHARSET.length];
    }
  }
  return id;
}

// single public API (named export)
