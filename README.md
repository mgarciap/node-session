# node-session

Example of using share stored sessions (Cloud apps) versus legacy 'in memory stored sessions'  apps

## PaaS app

- Stores session data in Redis and every instance read the data from one Redis DB

Run in PaaS (Cloud Foundry):
```
$ git clone https://github.com/mgarciap/node-session
$ cf login -a api.run.pivotal.io

# Create Redis DB Service
$ cf create-service rediscloud 25mb redisdb

$ cf push
```
