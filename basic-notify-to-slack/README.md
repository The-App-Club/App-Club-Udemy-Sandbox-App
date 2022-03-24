## Reference

- [cli-wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- [build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/)
- [slack block-kit](https://api.slack.com/block-kit/building#getting_started)

## Set Up Env

```bash
$ wrangler secret put SLACK_WEBHOOK_URL
```

## Serve Dev

```bash
$ wrangler dev
```

## Check After Serve Dev

```bash
$ curl -sL 'http://127.0.0.1:8787/' | jq
{
  "status": 0,
  "message": "something ok"
}
```

## Deploy

```bash
$ time wrangler publish
✨  Build completed successfully!
✨  Successfully published your script to
 https://basic-notify-to-slack.app-club.workers.dev


real    0m3.490s
user    0m1.988s
sys     0m0.164s
```

## Check After Deploy

```bash
$ time curl -sL 'https://basic-notify-to-slack.app-club.workers.dev' | jq
{
  "status": 0,
  "message": "something ok"
}

real    0m1.102s
user    0m0.073s
sys     0m0.016s
```
