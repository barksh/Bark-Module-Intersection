/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Stamp Modifier
 */

import { IStampModifierConfig } from "../interface/stamp-modifier";
import { IStampModifierModel, StampModifierModel } from "../model/stamp-modifier";

export type CreateUnsavedStampModifierConfig = {
    // Nothing
} & IStampModifierConfig;

export const createUnsavedStampModifier = (
    config: CreateUnsavedStampModifierConfig,
): IStampModifierModel => {

    const stampModifierConfig: IStampModifierConfig = {
        ...config,
    };
    return new StampModifierModel(stampModifierConfig);
};
