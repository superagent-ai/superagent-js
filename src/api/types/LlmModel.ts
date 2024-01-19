/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An enumeration.
 */
export type LlmModel =
    | "GPT_3_5_TURBO_16K_0613"
    | "GPT_3_5_TURBO_0613"
    | "GPT_3_5_TURBO_1106"
    | "GPT_4_0613"
    | "GPT_4_32K_0613"
    | "GPT_4_1106_PREVIEW"
    | "MISTRAL_7B_INSTRUCT_V01"
    | "MIXTRAL_8X7B_INSTRUCT_V01";

export const LlmModel = {
    Gpt35Turbo16K0613: "GPT_3_5_TURBO_16K_0613",
    Gpt35Turbo0613: "GPT_3_5_TURBO_0613",
    Gpt35Turbo1106: "GPT_3_5_TURBO_1106",
    Gpt40613: "GPT_4_0613",
    Gpt432K0613: "GPT_4_32K_0613",
    Gpt41106Preview: "GPT_4_1106_PREVIEW",
    Mistral7BInstructV01: "MISTRAL_7B_INSTRUCT_V01",
    Mixtral8X7BInstructV01: "MIXTRAL_8X7B_INSTRUCT_V01",
} as const;
