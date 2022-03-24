## Set Profile

Cloudflare にログイン後、アカウント ID を確認し、toml ファイルに記載する

```
$ wrangler whoami
```

## Set Env

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
$ time curl -sL 'http://127.0.0.1:8787/?searchTerm=React' | awk 4
{"status":0,"message":"something ok"}

real    0m0.836s
user    0m0.001s
sys     0m0.014s

$ time curl -sL 'http://127.0.0.1:8787/?categoryName=ui' | awk 4
{"status":0,"message":"something ok"}

real    0m2.494s
user    0m0.013s
sys     0m0.000s
```

## Deploy

```bash
$ time wrangler publish
✨  Build completed successfully!
✨  Successfully published your script to
 https://notify-something-info-to-slack.app-club.workers.dev

real    0m14.080s
user    0m5.217s
sys     0m0.422s
```

## Check After Deploy

```bash
$ time curl -sL 'https://notify-something-info-to-slack.app-club.workers.dev/?searchTerm=Shopify' | awk 4
{"status":0,"message":"something ok"}

real    0m1.297s
user    0m0.023s
sys     0m0.000s

$ time curl -sL 'https://notify-something-info-to-slack.app-club.workers.dev/?categoryName=API' | awk 4
{"status":0,"message":"something ok"}

real    0m1.297s
user    0m0.023s
sys     0m0.000s

$ time curl -sL 'https://notify-something-info-to-slack.app-club.workers.dev/?categoryName=API' | awk 4
{"status":0,"message":"something ok"}

real    0m1.030s
user    0m0.059s
sys     0m0.003s

$ time curl -sL 'https://notify-something-info-to-slack.app-club.workers.dev?searchTerm=Shopify' | awk 4
{"status":0,"message":"something ok"}

real    0m1.421s
user    0m0.012s
sys     0m0.016s
```
