# Getting Started with the API and IOTA

## SETUP 

* Create file .env in api folder and fill it following the example.evn file.

## API ROUTES, SO FAR

    POST 'http://localhost:9000/api/users/:id/name/:name'
    
    Parameters: id: number, name: string 
    Returns: JSON object with the user's id and name.
    

    GET 'http://localhost:9000/api/users/:id'

    Parameters: id: number
    Returns: JSON object with the user's id and name found or Error message in JSON format.

GET 
GET http://localhost:9000/api/iota/seed
GET http://localhost:9000/api/iota/balance/atoi1qqa6mxujm8wdueuv8pjfnhkn8et0kpev584upnm2z58hvxjg3v78cqn2sxl
### Commands

* cd api
* npx tsc --init
* yarn init    
* yarn add ts-node-dev typescript -D
* yarn add prettier
* yarn dev
* yarn add express
* yarn add @types/node @types/express -D
* yarn add cors
* yarn add @types/node @types/cors -D
* yarn add helmet


### Debugging

* npx tsc --sourceMap
* SET NODE_ENV=development

Stop tracking files with git.
* git rm api/.env --cached
* git commit -m "Stopped tracking .env File"

Stop tracking builded files with git.
* git rm -r  --cached lib 
* git commit -m "Stopped tracking builded files"
