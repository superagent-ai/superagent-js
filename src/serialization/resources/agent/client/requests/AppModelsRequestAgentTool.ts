/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AppModelsRequestAgentTool: core.serialization.Schema<
    serializers.AppModelsRequestAgentTool.Raw,
    SuperAgent.AppModelsRequestAgentTool
> = core.serialization.object({
    toolId: core.serialization.string(),
});

export declare namespace AppModelsRequestAgentTool {
    interface Raw {
        toolId: string;
    }
}