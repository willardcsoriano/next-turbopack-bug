# Turbopack Dynamic Route Params Bug (Minimal Reproduction)

This repository demonstrates a Turbopack bug where `params` in App Router
dynamic routes is passed as a **Promise** instead of a resolved object.

## Steps to Reproduce

1. Install dependencies:
   npm install

2. Run the dev server:
   npm run dev

3. Visit:
   http://localhost:3000/test/dynamic-id

4. Check the console — you will see:
   Promise { { id: "dynamic-id" }, ... }

This behavior breaks standard App Router dynamic route usage.
