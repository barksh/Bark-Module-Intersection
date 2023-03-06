/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Stamp Modifier
 */

import { ObjectId } from "mongodb";

export enum StampModifierPropertyValueType {

    STRING = "STRING",
}

export type StampModifierPropertyType = {

    readonly key: string;

    readonly keyDisplay: string;
    readonly valueType: StampModifierPropertyValueType;
};

export interface IStampModifierConfig {

    readonly stampId: ObjectId;

    readonly modifierNameDisplay: string;
    readonly propertyTypes: StampModifierPropertyType[];
}

export interface IStampModifier extends IStampModifierConfig {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
