/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const EmbeddingsModelProvider: core.serialization.Schema<
    serializers.EmbeddingsModelProvider.Raw,
    SuperAgent.EmbeddingsModelProvider
> = core.serialization.enum_(["OPENAI", "AZURE_OPENAI"]);

export declare namespace EmbeddingsModelProvider {
    type Raw = "OPENAI" | "AZURE_OPENAI";
}
