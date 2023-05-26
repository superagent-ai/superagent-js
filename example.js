import SuperagentSDK from "./src/superagent.js";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUzNzA5ODQsInVzZXJJZCI6ImNsaGoyOHUxMzAwMDA2aWcwMnB0cG0xc2gifQ.yS6HjD6SISDi6DwzcTV289pKiH4UkNT_mZnqJpR_sSI";

const superagent = new SuperagentSDK(BEARER_TOKEN);

const prompts = await superagent.prompts().list();
const prompt = await superagent.prompts().create({
  name: "Test",
  input_variables: ["human_input", "chat_history"],
  template: "My prompt with variables {human_input} and {chat_history}",
});

console.log(prompt);
