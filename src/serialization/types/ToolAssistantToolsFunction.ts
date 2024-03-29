/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const ToolAssistantToolsFunction: core.serialization.ObjectSchema<
    serializers.ToolAssistantToolsFunction.Raw,
    SuperAgent.ToolAssistantToolsFunction
> = core.serialization.object({
    function: core.serialization.lazyObject(async () => (await import("..")).FunctionDefinition).optional(),
});

export declare namespace ToolAssistantToolsFunction {
    interface Raw {
        function?: serializers.FunctionDefinition.Raw | null;
    }
}
