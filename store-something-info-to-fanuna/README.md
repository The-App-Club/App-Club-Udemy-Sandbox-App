## Reference

- [cli-wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- [build-an-api-with-workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/)

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
$ curl -sL 'http://127.0.0.1:8787/?feedURL=https://www.reddit.com/r/react/.rss' | jq
{
  "status": 0,
  "message": {
    "data": {
      "createNotify": {
        "title": "Todays CowBoy Bebop News",
        "description": "Broadcast Nice Web Tips And Tech Info etc...",
        "rssInfoList": [
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/ky2gf5/hello_members_of_rreact/",
            "publishedAt": "2021-01-15 19:58:45",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Hello Members of r/React",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlj09d/saas_application_how_do_you_like_the_uiux_your/",
            "publishedAt": "2022-03-23 22:31:34",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Saas Application -&gt; how do you like the UI/UX? Your first impression?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tl7xk2/fastifywebpackhot_fastify_plugin_that_enables/",
            "publishedAt": "2022-03-23 18:49:44",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "fastify-webpack-hot: Fastify plugin that enables smooth React Refresh experience",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlj512/best_react_youtube_channels/",
            "publishedAt": "2022-03-23 22:37:31",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Best react youtube channels?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlu2aq/anyone_can_help_me_re_write_this_code_with_the/",
            "publishedAt": "2022-03-24 02:03:52",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Anyone can help me re write this code with the new react-router-dom",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlqcw4/how_can_i_use_a_hook_in_a_different_react/",
            "publishedAt": "2022-03-24 01:04:14",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "How can i use a hook in a different react component?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tllomk/can_i_make_a_frontend_of_a_tensorflow_python_app/",
            "publishedAt": "2022-03-23 23:37:07",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Can I make a frontend of a tensorflow (Python) app on mobile?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tl3x4h/password_protection_for_site/",
            "publishedAt": "2022-03-23 17:55:52",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Password protection for site",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tkvzte/top_ui_libraries_for_your_next_react_project/",
            "publishedAt": "2022-03-23 15:05:55",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Top UI Libraries for Your Next React Project",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tkpo14/multithreaded_production_build_for_react_apps/",
            "publishedAt": "2022-03-23 08:57:32",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Multi-threaded production build for react apps?",
            "categories": [
              "react"
            ]
          }
        ]
      }
    }
  }
}
```

## Deploy

```bash
$ time wrangler publish
✨  Build completed successfully!
✨  Successfully published your script to
 https://store-something-info-to-fanuna.app-club.workers.dev


real    0m5.960s
user    0m4.318s
sys     0m0.394s
```

## Check After Deploy

```bash
$ time curl -sL 'https://store-something-info-to-fanuna.app-club.workers.dev/?feedURL=https://www.reddit.com/r/react/.rss' | jq
{
  "status": 0,
  "message": {
    "data": {
      "createNotify": {
        "title": "Todays CowBoy Bebop News",
        "description": "Broadcast Nice Web Tips And Tech Info etc...",
        "rssInfoList": [
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/ky2gf5/hello_members_of_rreact/",
            "publishedAt": "2021-01-15 19:58:45",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Hello Members of r/React",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlj09d/saas_application_how_do_you_like_the_uiux_your/",
            "publishedAt": "2022-03-23 22:31:34",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Saas Application -&gt; how do you like the UI/UX? Your first impression?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tl7xk2/fastifywebpackhot_fastify_plugin_that_enables/",
            "publishedAt": "2022-03-23 18:49:44",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "fastify-webpack-hot: Fastify plugin that enables smooth React Refresh experience",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlj512/best_react_youtube_channels/",
            "publishedAt": "2022-03-23 22:37:31",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Best react youtube channels?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlu2aq/anyone_can_help_me_re_write_this_code_with_the/",
            "publishedAt": "2022-03-24 02:03:52",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Anyone can help me re write this code with the new react-router-dom",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tlqcw4/how_can_i_use_a_hook_in_a_different_react/",
            "publishedAt": "2022-03-24 01:04:14",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "How can i use a hook in a different react component?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tllomk/can_i_make_a_frontend_of_a_tensorflow_python_app/",
            "publishedAt": "2022-03-23 23:37:07",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Can I make a frontend of a tensorflow (Python) app on mobile?",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tl3x4h/password_protection_for_site/",
            "publishedAt": "2022-03-23 17:55:52",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Password protection for site",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tkvzte/top_ui_libraries_for_your_next_react_project/",
            "publishedAt": "2022-03-23 15:05:55",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Top UI Libraries for Your Next React Project",
            "categories": [
              "react"
            ]
          },
          {
            "description": "nothing description",
            "publicURL": "https://www.reddit.com/r/react/comments/tkpo14/multithreaded_production_build_for_react_apps/",
            "publishedAt": "2022-03-23 08:57:32",
            "thumbnail": "https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif",
            "title": "Multi-threaded production build for react apps?",
            "categories": [
              "react"
            ]
          }
        ]
      }
    }
  }
}

real    0m0.806s
user    0m0.077s
sys     0m0.000s
```
