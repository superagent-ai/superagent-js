/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SuperAgent from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Llm {
    interface Options {
        environment?: core.Supplier<environments.SuperAgentEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Llm {
    constructor(protected readonly _options: Llm.Options) {}

    /**
     * List all LLMs
     */
    public async list(): Promise<SuperAgent.LlmList> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SuperAgentEnvironment.Default,
                "api/v1/llms"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.1.16",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.LlmList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SuperAgentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new LLM
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async create(request: SuperAgent.AppModelsRequestLlm): Promise<SuperAgent.AppModelsResponseLlm> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SuperAgentEnvironment.Default,
                "api/v1/llms"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.1.16",
            },
            contentType: "application/json",
            body: await serializers.AppModelsRequestLlm.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AppModelsResponseLlm.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a single LLM
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async get(llmId: string): Promise<SuperAgent.AppModelsResponseLlm> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SuperAgentEnvironment.Default,
                `api/v1/llms/${llmId}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.1.16",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AppModelsResponseLlm.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Patch an LLM
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async update(
        llmId: string,
        request: SuperAgent.AppModelsRequestLlm
    ): Promise<SuperAgent.AppModelsResponseLlm> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SuperAgentEnvironment.Default,
                `api/v1/llms/${llmId}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.1.16",
            },
            contentType: "application/json",
            body: await serializers.AppModelsRequestLlm.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AppModelsResponseLlm.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
