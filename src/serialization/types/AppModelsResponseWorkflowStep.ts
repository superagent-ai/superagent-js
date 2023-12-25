/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsResponseWorkflowStep: core.serialization.ObjectSchema<
    serializers.AppModelsResponseWorkflowStep.Raw,
    SuperAgent.AppModelsResponseWorkflowStep
> = core.serialization.object({
    success: core.serialization.boolean(),
    data: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsWorkflowStep).optional(),
});

export declare namespace AppModelsResponseWorkflowStep {
    interface Raw {
        success: boolean;
        data?: serializers.PrismaModelsWorkflowStep.Raw | null;
    }
}