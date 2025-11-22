# [Gemini Whatsapp](#)

Run Gemini Agents on WhatsApp

## how to run

Get your [Gemini API Key]().

Set your real [Gemini API Key]().

```bash
export GEMINI_API_KEY=""
```

```bash
docker run --rm -d --name genwa -e "GEMINI_API_KEY=${GEMINI_API_KEY}" tmvdl/gemini-whatsapp
```

Scan QRCode with your WhatsApp App.

```bash
docker logs genwa --follow
```

## how to deploy to Google Cloud

You may deploy this project, in a click, with button below.

[Run on Google Cloud](https://deploy.cloud.run/?git_url=https://github.com/tarsislimadev/gemini-whatsapp)

## how to deploy to AWS

[Deploy to AWS](https://console.aws.amazon.com/ecs/home#/clusters)

To deploy, navigate to the AWS ECS console, create a new task definition, and use the Docker image `tmvdl/gemini-whatsapp`. Remember to set the `GEMINI_API_KEY` environment variable.

Create a ECR repository.

Deploy an ECS instance with `tmvdl/gemini-whatsapp`.

Set var GEMINI_API_KEY.

Look for logs.

Scan QRCode with your WhatsApp App.

## license

[MIT](./LICENSE)
