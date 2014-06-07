# node-session

Example of using local stored sessions (legacy apps) versus cloud apps

## legacy app

- hard-coded listening port
- uses sessions/cookie sessions stored in memory

Run in PaaS (Cloud Foundry):
```
$ git clone https://github.com/mgarciap/node-session
$ git checkout legacy
$ cf login -a api.run.pivotal.io
$ cf push
```
