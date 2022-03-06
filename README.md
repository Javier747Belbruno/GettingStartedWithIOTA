# Getting Started with the API and IOTA

## SETUP 

* cd api
* yarn install
* Create file .env in api folder and fill it following the example.evn file.

## RUN
* yarn dev


## API ROUTES 


    POST 'http://localhost:9000/api/users/:id/name/:name'
    
    Parameters: id: number, name: string 
    Returns: JSON object with the user's id and name.
    

    GET 'http://localhost:9000/api/users/:id'

    Parameters: id: number
    Returns: JSON object with the user's id and name found or Error message in JSON format.

GET 
GET http://localhost:9000/api/iota/seed
GET http://localhost:9000/api/iota/balance/atoi1qqa6mxujm8wdueuv8pjfnhkn8et0kpev584upnm2z58hvxjg3v78cqn2sxl




### Commands employed for development

* cd api
* npx tsc --init
* yarn init    
* yarn add ts-node-dev typescript -D
* yarn add prettier 
* yarn dev
* yarn add express 
* yarn add @types/node @types/express -D

* yarn add cors (Middleware)
* yarn add @types/node @types/cors -D

* yarn add helmet (Middleware)
* yarn add winston (Logger)


### Downgrade Node version v17.x to stable (v16.x)
* @iota/client is unsoported on v17.x

* sudo npm install -g n
* sudo n stable

### Debugging

* npx tsc --sourceMap
* SET NODE_ENV=development

Stop tracking files with git.
* git rm api/.env --cached
* git commit -m "Stopped tracking .env File"

Stop tracking builded files with git.
* git rm -r  --cached lib 
* git commit -m "Stopped tracking builded files"
