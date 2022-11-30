# cid-checker-bot

This bot listens for `issue_comment.created` and looks for CID checker stats in order to insert a new comment

> A GitHub App built with [Probot](https://github.com/probot/probot) that listens for ``issue_comment` events and responds with relavent SP information.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t cid-checker-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> cid-checker-bot
```

## Contributing

If you have suggestions for how cid-checker-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 brianrossetti
