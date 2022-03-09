# Getting Started with the API and IOTA.RS Client Library via IOTA.JS

## API REFERENCE

### IOTA

| Method | Path                        | Description                                                                | Resource URL                                    | Parameters                                   | Response                             |
| ------ | --------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------- | ------------------------------------ |
| GET    | /iota/node                  | Get connected node's info                                                  | http://localhost:9000/api/iota/node             | None                                         | Node's info in JSON format.          |
| GET    | /iota/seed                  | Get a random seed                                                          | http://localhost:9000/api/iota/seed             | None                                         | seed in JSON format.                 |
| GET    | /iota/addresses             | Get first five addresses from a given seed, A seed must to be in .env file | http://localhost:9000/api/iota/addresses        | None                                         | Five address objects in JSON format. |
| GET    | /iota/node/balance/:address | Get address' balance                                                       | http://localhost:9000/api/iota/balance/:address | address: Chrysalis address (bech32 standard) | Address' balance in JSON format.     |

### Users

| Method | Path                 | Description      | Resource URL                                   | Parameters               | Response                                                                       |
| ------ | -------------------- | ---------------- | ---------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------ |
| GET    | users/:id            | Get user by id   | http://localhost:9000/api/users/:id            | id: number               | JSON object with the user's id and name found or Error message in JSON format. |
| POST   | users/:id/name/:name | Send id and name | http://localhost:9000/api/users/:id/name/:name | id: number, name: string | JSON object with the user's id and name.                                       |

## SETUP

```sh
cd api
yarn install
```

- Create file .env in api folder and fill it following the example.evn file.

## RUN

```sh
yarn dev
yarn build
yarn start
```

### Commands employed for development

```sh
- cd api
- npx tsc --init
- yarn init
- yarn add ts-node-dev typescript -D
- yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier --dev
- yarn dev
- yarn add express
- yarn add @types/node @types/express -D

- yarn add cors (Middleware)
- yarn add @types/node @types/cors -D

- yarn add helmet (Middleware)
- yarn add winston (Logger)

- yarn add express-validator
```

### Downgrade Node version v17.x to stable (v16.x)

- @iota/client is unsoported on v17.x

```sh
- sudo npm install -g n
- sudo n stable
```

### Debugging

```sh
- npx tsc --sourceMap
- SET NODE_ENV=development
```

Stop tracking files with git.

```sh
- git rm api/.env --cached
- git commit -m "Stopped tracking .env File"
```

Stop tracking built files with git.

```sh
- git rm -r --cached lib
- git commit -m "Stopped tracking built files"
```
