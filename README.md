<div align="center">

# Superagent JavaScript SDK 🥷

### The open framework for building AI Assistants

<p>

[![npm shield](https://img.shields.io/npm/v/superagentai-js)](https://www.npmjs.com/package/superagentai-js)
<a href="https://buildwithfern.com/?utm_source=homanp/suepragent-py/readme">
        <img alt="Fern" src="https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen" />
    </a><img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/homanp/superagent-py" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/homanp/superagent-py" />
<img alt="" src="https://img.shields.io/github/repo-size/homanp/superagent-py" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/homanp/superagent-py" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/homanp/superagent-py" />
<img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img alt="Discord" src="https://img.shields.io/discord/1110910277110743103?label=Discord&logo=discord&logoColor=white&style=plastic&color=d7b023)](https://discord.gg/e8j7mgjDUK" />
</p>

</div>

-----

Superagent is an open source framework that enables any developer to integrate production ready AI Assistants into any application in a matter of minutes.

-----

## Installation

Add this dependency to your project's build file:

```bash
npm install superagentai-js
# or
yarn add superagentai-js
```

## Usage

```ts
import { Superagent, SuperAgentClient } from "superagentai-js";

const client = new SuperAgentClient(token="API_TOKEN")
const agent = await client.agent.create({
    name: "My Agent",
    description: "My Awesome Agent",
    isActive: True,
    llmModel: "GPT_4_1106_PREVIEW",
    promprt: "You are a helpful assistant"
});

output = await client.agent.invoke(agent.data.id, {
    input: "Hi there!",
    enableStreaming: false,
    sessionId: "123",
});

console.log("Received response from superagent", agent.data)
```


## Handling Exceptions

All exceptions thrown by the SDK will sublcass [SuperAgentError](./src/errors/SuperAgentError.ts).

```ts
improt { SuperAgentError } from "superagentai-js";

try {
  client.agent.invoke(...)
} catch (err) {
  if (err instanceof SuperAgentError) {
    console.log(err.statusCode);
    console.log(err.message);
  }
}
```

## Acknowledgements

A special thanks to the [Fern](https://buildwithfern.com/) team for all support with the Superagent libraries and SDKs ❤️.

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version. This way, you can install the 
same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved 
over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we 
will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
