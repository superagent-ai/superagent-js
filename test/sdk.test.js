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

describe("Documents", () => {
  let document;

  it("should create a document", async () => {
    const { success, data } = await superagent.documents().create({
      name: "Test",
      url: "https://digitalassets.tesla.com/tesla-contents/image/upload/IR/TSLA-Q1-2023-Update",
      type: "PDF",
    });

    document = data;

    expect(success).to.equal(true);
    expect(data).to.be.an("object");
  });

  it("should retrieve a list of documents", async () => {
    const { success, data } = await superagent.documents().list();

    expect(success).to.equal(true);
    expect(data).to.be.an("array");
  });

  it("should retrieve a single document", async () => {
    const { success, data } = await superagent.documents().get(document.id);

    expect(success).to.equal(true);
    expect(data).to.be.an("object");
  });

  it("should delete a single document", async () => {
    const { success, data } = await superagent.documents().delete(document.id);

    expect(success).to.equal(true);
    expect(data).to.equal(null);
  });
});
