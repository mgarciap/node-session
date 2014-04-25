# node-session

example of using sessions in legacy apps versus cloud apps

## legacy app

- hard-coded listening port
- uses sessions/cookie sessions stored in memory

Run locally:
```
$ git clone https://github.com/homingli/node-session
$ git checkout legacy
$ npm install
$ node server.js
```

## cloud app

- intended for use in PaaS
- uses Redis for session store (connect via URL from env)
- service bindings (see stackato.yml)
- leverages environment variables for listening port

Run in PaaS (Stackato):
```
$ git clone https://github.com/homingli/node-session
$ git checkout cloud
$ stackato target <api endpoint>
$ stackato login
$ stackato push -n
```
