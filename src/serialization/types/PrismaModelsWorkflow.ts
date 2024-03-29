/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsWorkflow: core.serialization.ObjectSchema<
    serializers.PrismaModelsWorkflow.Raw,
    SuperAgent.PrismaModelsWorkflow
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    steps: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsWorkflowStep))
        .optional(),
    apiUserId: core.serialization.string(),
    apiUser: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsApiUser).optional(),
    workflowConfigs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).WorkflowConfig))
        .optional(),
});

export declare namespace PrismaModelsWorkflow {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        createdAt: string;
        updatedAt: string;
        steps?: serializers.PrismaModelsWorkflowStep.Raw[] | null;
        apiUserId: string;
        apiUser?: serializers.PrismaModelsApiUser.Raw | null;
        workflowConfigs?: serializers.WorkflowConfig.Raw[] | null;
    }
}
