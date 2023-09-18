<div align="center">

# Superagent Typescript SDK 🥷

### The agent framework for large language models

<p>
<img alt="NPM" src="https://img.shields.io/npm/dt/superagentai-js?logo=npm" />
<img alt="Fern" src="https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen" />
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/homanp/superagent-py" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/homanp/superagent-py" />
<img alt="" src="https://img.shields.io/github/repo-size/homanp/superagent-py" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/homanp/superagent-py" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/homanp/superagent-py" />
<img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img alt="Discord" src="https://img.shields.io/discord/1110910277110743103?label=Discord&logo=discord&logoColor=white&style=plastic&color=d7b023)](https://discord.gg/e8j7mgjDUK" />
</p>

</div>

-----

Superagent is an open source agent framework that enables any developer to integrate production ready AI Agents into any application in a matter of minutes.

-----

## Installation

Add this dependency to your project's build file:

```bash
npm i supeagentai-js

yarn add superagentai-js
```

## Usage
```bash
import { SuperAgentClient } from "superagentai-js"

const client = new SuperAgentClient({
  "environment": "https://api.beta.superagent.sh",
  "token": process.env['SUPERAGENT_API_KEY']
})

const agent = await agent.client.create({
  "name": "My agent",
  "description: "My agent description",
  "isActive": true,
  "llmModel": "GPT_4_32K_0613",
  "prompt": "You are an AI assistant..."
})

console.log("agent", agent.data)
```
