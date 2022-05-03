# Dungeon Book Bot
Serverless Telegram Bot Contains russian version of the book
for Adventure Games: The Dungeon, Adventure Games: Das Verlies, 2019 

Try live: https://t.me/DungeonBookBot

## Local run

* Install git, node, npm, [local tunnel](https://localtunnel.github.io/www/)
and [Serverless framework](https://www.serverless.com/framework/docs/getting-started)
* Clone the repo `git@github.com:voborgus/dungeon-book-bot.git`
* Install dependencies with `npm i`
* Create the test bot in the telegram using [Bot Father](https://t.me/BotFather)
* Create the `.env.yml` file and fill the bot token from the previous step
```yaml
dev:
  bot_token: [TOKEN_HERE]
```
* Run `sls offline`
* Expose `3000` port using local tunnel `lt --port 3000`
* Set the webhook in the test bot in the telegram sending the POST request to the url
`https://api.telegram.org/bot[TOKEN_HERE]/setWebhook?url=https://[URL_FROM_LOCALTUNNEL]/dev/webhook`
* Voila, send message to your bot in the telegram

## Deployment via serverless
Deployment can be done using serverless framework and yandex cloud.

* Install [Yandex Cloud client](https://cloud.yandex.ru/docs/cli/quickstart) and login there
* Deploy the bot `sls deploy`
* Make the function public in the Yandex Cloud Console
* Set the webhook in the bot in the telegram sending the POST request to the url
  `https://api.telegram.org/bot[TOKEN_HERE]/setWebhook?url=https://[FUNCTION URL]/`
* Voila, send message to your bot in the telegram

## Deployment via Terraform

* Install terraform
* Go to `terraform` folder and run `terraform apply`
* Make the function public in the Yandex Cloud Console
* Set the webhook in the bot in the telegram sending the POST request to the url
  `https://api.telegram.org/bot[TOKEN_HERE]/setWebhook?url=https://[FUNCTION URL]/`
* Voila, send message to your bot in the telegram

# License

The code licensed under MIT license.

All rights of the book content belongs to [Zvezda](https://zvezda.org.ru/catalog/nastolnye_igry/igry_kvesty/podzemele/)
