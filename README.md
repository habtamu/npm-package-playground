# test-npm-package

## create igonore files
    -   .gitignore
    -   .npmignore

## setup

- pnpm add -D typescript types/node tsup vtest

## Package Configuration
``` bash
"scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "lint": "tsc"
  },
```
### Execute build
```bash
pnpm run build
```

### ts configuration
```json
//tsconfig.json
{
    "compilerOptions": {
        "target": "ES2016",
        "module": "CommonJS",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "noEmit": true
    }
}
```

### lint example
``` console
~/Doc/S/repos/test-npm-package main !1 ?5 ❯ pnpm lint                                                                      16.15.0 10:46:49 PM

> test-npm-package@1.0.0 lint /Users/habtamu.desalegn/Documents/Source/repos/test-npm-package
> tsc

src/index.ts:1:36 - error TS2339: Property 'lg' does not exist on type 'Console'.

1 export const hello = () => console.lg('hello')
                                     ~~

Found 1 error in src/index.ts:1

 ELIFECYCLE  Command failed with exit code 2.
```

## Test
### setup
```bash
    pnpm add -D vitest    
```
### script
```bash
    "dev": "vitest",
    "test": "vitest run"
```
#### execute
```bash
    pnpm dev
```
## CI using github Action
### configuration
```yml
//.github/workflows
//main.yml
name: CI
on:
  push:
    branches:
      - "**"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: "pnpm"

      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint && pnpm run build && pnpm run test

//release.yml
name: Publish
on:
  push:
    branches:
      - "main"

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: "pnpm"

      - run: pnpm install --frozen-lockfile
      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```
### Execute CI
