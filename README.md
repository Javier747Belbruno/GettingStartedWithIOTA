# Getting Started with the API and IOTA


## API ROUTES, SO FAR

    POST 'http://localhost:9000/api/users/:id/name/:name'
    
    Parameters: id: number, name: string 
    Returns: JSON object with the user's id and name.
    

    GET 'http://localhost:9000/api/users/:id'

    Parameters: id: number
    Returns: JSON object with the user's id and name found or Error message in JSON format.


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