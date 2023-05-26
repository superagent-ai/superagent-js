import SuperagentSDK from "./src/superagent.js";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUzNzA5ODQsInVzZXJJZCI6ImNsaGoyOHUxMzAwMDA2aWcwMnB0cG0xc2gifQ.yS6HjD6SISDi6DwzcTV289pKiH4UkNT_mZnqJpR_sSI";

const superagent = new SuperagentSDK(BEARER_TOKEN);

const response = await superagent.prompts().delete("cli4m7agx0005uj1llc6wxavg");
