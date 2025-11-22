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

<a href="https://deploy.cloud.run">
  <img src="https://deploy.cloud.run/button.svg" alt="Run on Google Cloud" height="45">
</a>

## how to deploy to AWS

[![Deploy to AWS](https://d3teyb21fsmzsd.cloudfront.net/assets/images/deploy-to-aws.svg)](https://console.aws.amazon.com/ecs/home#/clusters)

To deploy, navigate to the AWS ECS console, create a new task definition, and use the Docker image `tmvdl/gemini-whatsapp`. Remember to set the `GEMINI_API_KEY` environment variable.

Create a ECR repository.

Deploy an ECS instance with `tmvdl/gemini-whatsapp`.

Set var GEMINI_API_KEY.

Look for logs.

Scan QRCode with your WhatsApp App.

## license

[MIT](./LICENSE)
