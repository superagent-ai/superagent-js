/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsVectorDb: core.serialization.ObjectSchema<
    serializers.PrismaModelsVectorDb.Raw,
    SuperAgent.PrismaModelsVectorDb
> = core.serialization.object({
    id: core.serialization.string(),
    provider: core.serialization.lazy(async () => (await import("..")).VectorDbProvider),
    options: core.serialization.unknown().optional(),
    datasources: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsDatasource))
        .optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    apiUserId: core.serialization.string(),
    apiUser: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsApiUser).optional(),
});

export declare namespace PrismaModelsVectorDb {
    interface Raw {
        id: string;
        provider: serializers.VectorDbProvider.Raw;
        options?: unknown | null;
        datasources?: serializers.PrismaModelsDatasource.Raw[] | null;
        createdAt: string;
        updatedAt: string;
        apiUserId: string;
        apiUser?: serializers.PrismaModelsApiUser.Raw | null;
    }
}
