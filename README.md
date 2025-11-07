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

## how to deploy on aws

Create a ECR repository.

Deploy an ECS instance with `tmvdl/gemini-whatsapp`.

Set var GEMINI_API_KEY.

Look for logs.

Scan QRCode with your WhatsApp App.

## license

[MIT](./LICENSE)
