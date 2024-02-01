/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const LlmModel: core.serialization.Schema<serializers.LlmModel.Raw, SuperAgent.LlmModel> =
    core.serialization.enum_([
        "GPT_3_5_TURBO_16K_0613",
        "GPT_3_5_TURBO_0613",
        "GPT_3_5_TURBO_1106",
        "GPT_4_0613",
        "GPT_4_32K_0613",
        "GPT_4_1106_PREVIEW",
        "GPT_4_TURBO_PREVIEW",
        "MISTRAL_7B_INSTRUCT_V01",
        "MIXTRAL_8X7B_INSTRUCT_V01",
    ]);

export declare namespace LlmModel {
    type Raw =
        | "GPT_3_5_TURBO_16K_0613"
        | "GPT_3_5_TURBO_0613"
        | "GPT_3_5_TURBO_1106"
        | "GPT_4_0613"
        | "GPT_4_32K_0613"
        | "GPT_4_1106_PREVIEW"
        | "GPT_4_TURBO_PREVIEW"
        | "MISTRAL_7B_INSTRUCT_V01"
        | "MIXTRAL_8X7B_INSTRUCT_V01";
}
