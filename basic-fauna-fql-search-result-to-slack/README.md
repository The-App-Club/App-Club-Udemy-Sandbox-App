## Reference

- [cli-wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- [build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/)
- [slack block-kit](https://api.slack.com/block-kit/building#getting_started)

## Set Up Env

```bash
$ wrangler secret put SLACK_WEBHOOK_URL
$ wrangler secret put FAUNA_DB_SERVER_KEY
```

## Serve Dev

```bash
$ wrangler dev
```

## Check After Serve Dev

```bash
$ curl -sL 'http://127.0.0.1:8787/?searchTerm=React' | jq
```

## Deploy

```bash
$ time wrangler publish
✨  Build completed successfully!
✨  Successfully published your script to
 https://basic-fauna-fql-search-result-to-slack.app-club.workers.dev


real    0m4.818s
user    0m2.880s
sys     0m0.392s
```

## Check After Deploy

```bash
$ time curl -sL 'https://basic-fauna-fql-search-result-to-slack.app-club.workers.dev/?searchTerm=React' | jq
{
  "status": 0,
  "message": "something ok"
}

real    0m1.535s
user    0m0.074s
sys     0m0.030s
```
