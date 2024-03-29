/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const ApiKeyCreateModel: core.serialization.ObjectSchema<
    serializers.ApiKeyCreateModel.Raw,
    SuperAgent.ApiKeyCreateModel
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    displayApiKey: core.serialization.string(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    apiUserId: core.serialization.string(),
    apiUser: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsApiUser).optional(),
    apiKey: core.serialization.string(),
});

export declare namespace ApiKeyCreateModel {
    interface Raw {
        id: string;
        name: string;
        displayApiKey: string;
        createdAt: string;
        updatedAt: string;
        apiUserId: string;
        apiUser?: serializers.PrismaModelsApiUser.Raw | null;
        apiKey: string;
    }
}
