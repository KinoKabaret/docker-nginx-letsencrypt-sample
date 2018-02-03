# Our initial info page.

It's probably overkill for a single html page, one CSS file, two javascripts and one API call to use docker to set this up, but it is kind of future-proof and brings a lot of nice stuff:

- nginx reverse proxy
- auto-renewing TLS certs
- html server
- api server (node.js)
- reproducible builds

### Running
You'll need docker and docker-compose.

In the main directory run: 

```bash
git pull
cd docker-nginx-letsencrypt
docker-compose up
```

Hello, I'm Babas and I write from Brussels

2018