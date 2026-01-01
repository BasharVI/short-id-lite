# short-id-lite

A tiny, dependency-free Node.js utility that generates short, URL-safe, cryptographically secure random IDs.

## Installation

npm install short-id-lite

## Usage

import { shortId } from 'short-id-lite';

shortId();      // default length: 6
shortId(10);    // custom length

## API

shortId(length?: number): string

- length: optional integer between 3 and 32 (default 6)
- returns a URL-safe string using A–Z a–z 0–9

Errors

- Throws TypeError if length is not an integer
- Throws RangeError if length is outside [3, 32]

## Why this package exists

This package is intentionally minimal: it provides a single synchronous API that is small, fast,
dependency-free, and safe for server-side use. It deliberately avoids browser concerns and
feature-heavy alternatives.

## Comparison with nanoid

nanoid is a full-featured, well-tested ID library with plugins and browser support. `short-id-lite`
is not a replacement — it is a compact alternative when you need tiny, dependency-free IDs
for Node.js only.

## Security notes

IDs are generated with Node's built-in crypto.randomBytes and use rejection sampling to avoid
modulo bias. Do not use these IDs as secrets or to derive cryptographic keys.

## License

MIT
