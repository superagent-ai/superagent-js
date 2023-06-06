<div align="center">

# Superagent Javascript SDK 🥷

**This is the offical Javascript SDK for [superagent.sh](https://superagents.sh)**.

<p>
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/homanp/superagent-js" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/homanp/superagent-js" />
<img alt="" src="https://img.shields.io/github/repo-size/homanp/superagent-js" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/homanp/superagent-js" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/homanp/superagent-js" />
<img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img alt="Discord" src="https://img.shields.io/discord/1110910277110743103?label=Discord&logo=discord&logoColor=white&style=plastic&color=d7b023)](https://discord.gg/e8j7mgjDUK" />
</p>

</div>

## Getting started

#### 1. Installation

Install the `superagentai-js` package.

```bash
npm i superagentai-js
```

#### 2. Usage

```javascript
import SuperagentSDK from "superagentai-js";

const superagent = new SuperagentSDK(process.env.SUPERAGENT_API_TOKEN);
```

## Examples

- [Superagent in NextJS](https://github.com/homanp/nextjs-superagent)

## API Reference

The SDK exposes the following three resources: `Prompts`, `Documents` and `Agents`. Below you will find a schematic overivew of each resource:

### Agents

```javascript
// List all agents
await superagent.agents().list();

// Retuns a specific agent
await superagent.agents().get("<AGENT_ID>");

// Delete agent
await superagent.agents().delete("<AGENT_ID>");

// Create agent
await superagent.agents().create({
  name: "Ny agent",
  llm: {
    provider: "openai-chat",
    model: "gpt-4",
    api_key: process.env.OPENAI_API_KEY,
  },
  has_memory: true,
  promptId: "<PROMPT_ID>",
  documentId: "<DOCUMENT_ID>",
  toolId: "<TOOL_ID>",
});

// Run an agent
await superagent.agents().predict({
  input: { human_input: "Hello" },
  has_streaming: true,
});
```

### Tools

```javascript
// List all tools
await superagent.tools().list();

// Retuns a specific tool
await superagent.tools().get("<TOOL_ID>");

// Delete tool
await superagent.tools().delete("<TOOL_ID>");

// Create tool
await superagent.tools().create({
  name: "My tool",
  type: "SEARCH",
});
```

### Documents

```javascript
// List all documents
await superagent.documents().list();

// Retuns a specific document
await superagent.documents().get("<DOCUMENT_ID>");

// Delete document
await superagent.documents().delete("<DOCUMENT_ID>");

// Create document
await superagent.documents().create({
  name: "Ny agent",
  url: "https://digitalassets.tesla.com/tesla-contents/image/upload/IR/TSLA-Q1-2023-Update",
  type: "PDF",
});
```

### Prompts

```javascript
  // List all prompts
  await superagent.prompts().list();

  // Retuns a specific prompt
  await superagent.prompts().get("<PROMPT_ID>");

  // Delete prompt
  await superagent.prompts().delete("<PROMPT_ID>");

  // Create prompt
  await superagent.prompts().create({
    name: "My prompt",
    input_variables: ["human_input", "chat_history"],
    template="You are an AI assistant that should answer a humans question. \n {chat_history} \n\n Human input: {human_input} \n Answer:"
  });
```
