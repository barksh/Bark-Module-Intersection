/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Stamp Modifier
 */

import { Document, model, Model, Schema } from "mongoose";
import { IStampModifier, StampModifierPropertyType } from "../interface/stamp-modifier";

export const StampModifierPropertyTypeSchema: Schema<StampModifierPropertyType> = new Schema({

    key: {
        type: String,
        required: true,
    },
    keyDisplay: {
        type: String,
        required: true,
    },
    valueType: {
        type: String,
        required: true,
    },
}, { _id: false });

const StampModifierSchema: Schema<IStampModifierModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        stampId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        modifierNameDisplay: {
            type: String,
            required: true,
        },
        propertyTypes: {
            type: [StampModifierPropertyTypeSchema],
            required: true,
            default: [],
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

export interface IStampModifierModel extends IStampModifier, Document {
}

export const StampModifierModel: Model<IStampModifierModel> = model<IStampModifierModel>('StampModifier', StampModifierSchema);
