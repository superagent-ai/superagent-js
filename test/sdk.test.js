import chai from "chai";
import chaiHttp from "chai-http";
import SuperagentSDK from "../src/superagent.js";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUzNzA5ODQsInVzZXJJZCI6ImNsaGoyOHUxMzAwMDA2aWcwMnB0cG0xc2gifQ.yS6HjD6SISDi6DwzcTV289pKiH4UkNT_mZnqJpR_sSI";
const expect = chai.expect;
const superagent = new SuperagentSDK(BEARER_TOKEN);

chai.use(chaiHttp);

describe("Prompts", () => {
  let prompt;

  it("should create a prompt", async () => {
    const { success, data } = await superagent.prompts().create({
      name: "Test",
      template: "My template {human_input} {chat_history}",
      input_variables: ["human_input", "chat_history"],
    });

    prompt = data;

    expect(success).to.equal(true);
    expect(data).to.be.an("object");
  });

  it("should retrieve a list of prompts", async () => {
    const { success, data } = await superagent.prompts().list();
    expect(success).to.equal(true);
    expect(data).to.be.an("array");
  });

  it("should retrieve a single prompt", async () => {
    const { success, data } = await superagent.prompts().get(prompt.id);

    expect(success).to.equal(true);
    expect(data).to.be.an("object");
  });

  it("should delete a single prompt", async () => {
    const { success, data } = await superagent.prompts().delete(prompt.id);

    expect(success).to.equal(true);
    expect(data).to.equal(null);
  });
});
