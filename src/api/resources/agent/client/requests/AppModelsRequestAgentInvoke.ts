/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "../../../..";

export interface AppModelsRequestAgentInvoke {
    input: string;
    sessionId?: string;
    enableStreaming: boolean;
    outputSchema?: string;
    llmParams?: SuperAgent.LlmParams;
}
