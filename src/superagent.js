export default class SuperagentSDK {
  constructor(authToken) {
    this.baseUrl = "http://127.0.0.1:8000/api/v1";
    this.authToken = authToken;
  }

  async _request(method, endpoint, data = null) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${this.authToken}`,
        },
      };

      if (data) {
        if (method === "GET") {
          const queryString = new URLSearchParams(data).toString();
          url += `?${queryString}`;
        } else {
          options.body = JSON.stringify(data);

          if (data.input) {
            options.headers = {
              "Content-Type": "application/json",
              X_SUPERAGENT_API_KEY: this.authToken,
            };
          }
        }
      }

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Request failed");
      }

      return responseData;
    } catch (error) {
      throw error;
    }
  }

  prompts() {
    return {
      delete: async (id) => await this._request("DELETE", `/prompts/${id}`),
      get: async (id) => await this._request("GET", `/prompts/${id}`),
      list: async () => await this._request("GET", "/prompts"),
      update: async (id, payload) =>
        await this._request("PATCH", `/prompts/${id}`, { ...payload }),
      create: async ({ name = null, input_variables = [], template = null }) =>
        await this._request("POST", "/prompts", {
          name,
          input_variables,
          template,
        }),
    };
  }

  documents() {
    return {
      delete: async (id) => await this._request("DELETE", `/documents/${id}`),
      list: async () => await this._request("GET", "/documents"),
      get: async (id) => await this._request("GET", `/documents/${id}`),
      create: async ({ name, url, type, authorization = null }) =>
        await this._request("POST", "/documents", {
          name,
          url,
          type,
          authorization,
        }),
    };
  }

  agents() {
    return {
      delete: async (id) => await this._request("DELETE", `/agents/${id}`),
      list: async () => await this._request("GET", "/agents"),
      get: async (id) => await this._request("GET", `/agents/${id}`),
      create: async ({
        name,
        llm,
        type = "REACT",
        hasMemory,
        promptId = null,
      }) =>
        await this._request("POST", "/agents", {
          name,
          type,
          llm,
          hasMemory,
          promptId,
        }),
      predict: async ({ id, input, has_streaming }) =>
        await this._request("POST", `/agents/${id}/predict`, {
          input,
          has_streaming,
        }),
    };
  }

  tools() {
    return {
      delete: async (id) => await this._request("DELETE", `/tools/${id}`),
      list: async () => await this._request("GET", "/tools"),
      get: async (id) => await this._request("GET", `/tools/${id}`),
      create: async ({ name, type = "SEARCH" }) =>
        await this._request("POST", "/tools", {
          name,
          type,
        }),
    };
  }
}
