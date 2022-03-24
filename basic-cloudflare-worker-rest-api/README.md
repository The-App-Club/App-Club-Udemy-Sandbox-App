## Reference

- [cli-wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- [build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/)

## Serve Dev

```bash
$ wrangler dev
```

## Check After Serve Dev

```bash
$ curl -sL 'http://127.0.0.1:8787/api/posts' | jq
[
  {
    "id": 1,
    "title": "My first blog post",
    "text": "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
    "published_at": "2020-10-23T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Updating my blog",
    "text": "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
    "published_at": "2020-10-26T00:00:00.000Z"
  }
]

$ curl -sL 'http://127.0.0.1:8787/api/posts/1' | jq
{
  "id": 1,
  "title": "My first blog post",
  "text": "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
  "published_at": "2020-10-23T00:00:00.000Z"
}

$ curl -sL 'http://127.0.0.1:8787/api/posts/2' | jq
{
  "id": 2,
  "title": "Updating my blog",
  "text": "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
  "published_at": "2020-10-26T00:00:00.000Z"
}
```

## Deploy

```bash
$ time wrangler publish
✨  Build completed successfully!
✨  Successfully published your script to
 https://basic-cloudflare-worker-rest-api.app-club.workers.dev


real    0m4.089s
user    0m1.920s
sys     0m0.234s
```

## Check After Deploy

```bash
$ curl -sL 'https://basic-cloudflare-worker-rest-api.app-club.workers.dev/api/posts' | jq
[
  {
    "id": 1,
    "title": "My first blog post",
    "text": "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
    "published_at": "2020-10-23T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Updating my blog",
    "text": "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
    "published_at": "2020-10-26T00:00:00.000Z"
  }
]

$ curl -sL 'https://basic-cloudflare-worker-rest-api.app-club.workers.dev/api/posts/1' | jq
{
  "id": 1,
  "title": "My first blog post",
  "text": "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
  "published_at": "2020-10-23T00:00:00.000Z"
}

$ curl -sL 'https://basic-cloudflare-worker-rest-api.app-club.workers.dev/api/posts/2' | jq
{
  "id": 2,
  "title": "Updating my blog",
  "text": "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
  "published_at": "2020-10-26T00:00:00.000Z"
}
```
