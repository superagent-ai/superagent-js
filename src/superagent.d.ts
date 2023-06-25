declare module 'superagentSDK' {
  type Method = "GET" | "POST" | "DELETE";

  interface Prompt {
    name?: string | null;
    input_variables?: string[];
    template?: string | null;
  }

  interface Document {
    name: string;
    url: string;
    type: string;
    authorization?: string | null;
  }

  interface Tool {
    name: string;
    type: string;
  }

  interface Agent {
    name: string;
    llm: string;
    type?: string;
    hasMemory: boolean;
    promptId: string;
  }

  interface Prediction {
    id: string;
    input: string;
    has_streaming: boolean;
  }

  export default class SuperagentSDK {
    constructor(authToken: string);
    private _request(method: Method, endpoint: string, data?: any): Promise<any>;
    prompts(): {
      delete(id: string): Promise<any>;
      get(id: string): Promise<any>;
      update(id: string, data: object): Promise<any>;
      list(): Promise<any>;
      create(prompt: Prompt): Promise<any>;
    };
    documents(): {
      delete(id: string): Promise<any>;
      list(): Promise<any>;
      get(id: string): Promise<any>;
      create(document: Document): Promise<any>;
    };
    agents(): {
      delete(id: string): Promise<any>;
      list(): Promise<any>;
      get(id: string): Promise<any>;
      create(agent: Agent): Promise<any>;
      predict(prediction: Prediction): Promise<any>;
    };
    tools(): {
      delete(id: string): Promise<any>;
      list(): Promise<any>;
      get(id: string): Promise<any>;
      create(tool: Tool): Promise<any>;
    }
  }
}
