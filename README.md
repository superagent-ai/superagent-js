<div align="center">

# Superagent JS/TS SDK 🥷

### The open framework for building AI Assistants

<p>
<img alt="PyPi" src="https://img.shields.io/pypi/v/fern-superagent.svg" />
<img alt="Fern" src="https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen" />
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/homanp/superagent-js" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/homanp/superagent-js" />
<img alt="" src="https://img.shields.io/github/repo-size/homanp/superagent-js" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/homanp/superagent-js" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/homanp/superagent-js" />
<img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img alt="Discord" src="https://img.shields.io/discord/1110910277110743103?label=Discord&logo=discord&logoColor=white&style=plastic&color=d7b023)](https://discord.gg/e8j7mgjDUK" />
</p>

</div>

-----

Superagent is an open source framework that enables any developer to build production ready AI Assistants into any application in a matter of minutes.

-----

## Installation

Add this dependency to your project's build file:

```bash
npm i superagentai-js
```

## Usage

```javascript
import { SuperAgentClient } from "superagentai-js"

const superagent = new SuperAgentClient({
  environment: "https://api.beta.superagent.sh", // Replace with your own env
  token: process.env.SUPERAGENT_API_KEY // Replace with your own API key
})

const {data: llm} = await superagent.llm.create({
  provider: "OPENAI",
  apiKey: process.env.OPENAI_API_KEY
})

const {data: tool} = await superagent.tool.create({
  name: "Browser",
  description: "Useful for answering questions/analsing a website or url.",
  type: "BROWSER"
})

const {data: agent} = await superagent.agent.create({
  name: "My Agent",
  description: "My awesome agent",
  isActive: True,
  llmModel: "GPT_4_1106_PREVIEW",
  prompt: "You are a helpful assistant"
})

await superagent.agent.addLlm(agent.id, {
  llmId: llm.id
})

await superagent.agent.addTool(agent.id, {
  toolId: tool.id
})

const { data: { 
  output, 
  intermediate_steps: steps 
} } = await superagent.agent.invoke(agent.id, {
  input: userInput,
  enableStreaming: false,
  sessionId: "my-session"
})

console.log(output)
console.log(steps)

```

## Acknowledgements

A special thanks to the [Fern](https://buildwithfern.com/) team for all support with the Superagent libraries and SDKS ❤️.

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your pyproject.toml file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
