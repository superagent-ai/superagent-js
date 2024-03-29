/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const OpenAiAssistantParameters: core.serialization.ObjectSchema<
    serializers.OpenAiAssistantParameters.Raw,
    SuperAgent.OpenAiAssistantParameters
> = core.serialization.object({
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    fileIds: core.serialization.list(core.serialization.string()).optional(),
    tools: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).OpenAiAssistantParametersToolsItem))
        .optional(),
});

export declare namespace OpenAiAssistantParameters {
    interface Raw {
        metadata?: Record<string, unknown> | null;
        fileIds?: string[] | null;
        tools?: serializers.OpenAiAssistantParametersToolsItem.Raw[] | null;
    }
}
