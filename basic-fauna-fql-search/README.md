## Reference

- [cli-wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- [build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/)
- [slack block-kit](https://api.slack.com/block-kit/building#getting_started)

## Set Up Env

```bash
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
✨  Build completed successfully!
✨  Successfully published your script to
 https://basic-fauna-fql-search.app-club.workers.dev


real    0m4.152s
user    0m2.637s
sys     0m0.232s
```

## Check After Deploy

```bash
$ time curl -sL 'https://basic-fauna-fql-search.app-club.workers.dev/?searchTerm=React' | jq
{
  "status": 0,
  "message": [
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "fastify-webpack-hot: Fastify plugin that enables smooth React Refresh experience",
      "publishedAt": "2022-03-23 18:49:44",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tl7xk2/fastifywebpackhot_fastify_plugin_that_enables/"
    },
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "Top UI Libraries for Your Next React Project",
      "publishedAt": "2022-03-23 15:05:55",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tkvzte/top_ui_libraries_for_your_next_react_project/"
    },
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "fastify-webpack-hot: Fastify plugin that enables smooth React Refresh experience",
      "publishedAt": "2022-03-23 18:49:44",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tl7xk2/fastifywebpackhot_fastify_plugin_that_enables/"
    },
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "Top UI Libraries for Your Next React Project",
      "publishedAt": "2022-03-23 15:05:55",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tkvzte/top_ui_libraries_for_your_next_react_project/"
    },
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "fastify-webpack-hot: Fastify plugin that enables smooth React Refresh experience",
      "publishedAt": "2022-03-23 18:49:44",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tl7xk2/fastifywebpackhot_fastify_plugin_that_enables/"
    },
    {
      "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
      "categories": [
        "react"
      ],
      "title": "Top UI Libraries for Your Next React Project",
      "publishedAt": "2022-03-23 15:05:55",
      "description": "nothing description",
      "publicURL": "https://www.reddit.com/r/react/comments/tkvzte/top_ui_libraries_for_your_next_react_project/"
    }
  ]
}

real    0m1.337s
user    0m0.082s
sys     0m0.001s
```
