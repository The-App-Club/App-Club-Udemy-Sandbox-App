## Reference

- [gql_quick_start](https://docs.fauna.com/fauna/current/learn/quick_start/gql_quick_start)
- [@embedded](https://docs.fauna.com/fauna/current/api/graphql/directives/d_embedded)

## Usage

```bash
$ time node -r esm index.js | jq
{
  "data": {
    "createNotify": {
      "title": "something title",
      "description": "this is description",
      "rssInfoList": [
        {
          "description": "nothing description",
          "publicURL": "https://tympanus.net/codrops/2022/01/26/background-shift-animation-with-css-blend-modes/",
          "publishedAt": "2022-01-26 13:45:01",
          "thumbnail": "https://media1.giphy.com/media/3TACspcXhhQPK/giphy.gif",
          "title": "Background Shift Animation with CSS Blend Modes",
          "categories": [
            "a",
            "b"
          ]
        }
      ]
    }
  }
}

real    0m0.598s
user    0m0.279s
sys     0m0.023s
```
