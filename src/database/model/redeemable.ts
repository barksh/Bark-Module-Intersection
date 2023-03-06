/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Redeemable
 */

import { Document, model, Model, Schema } from "mongoose";
import { IRedeemable, RedeemableLimitation, RedeemableLimitationType, RedeemableObject, RedeemableObjectType } from "../interface/redeemable";

export const RedeemableObjectSchema: Schema<RedeemableObject<RedeemableObjectType>> = new Schema({

    type: {
        type: String,
        required: true,
    },
    payload: {
        type: Schema.Types.Mixed,
        required: false,
    },
}, { _id: false });

export const RedeemableLimitationSchema: Schema<RedeemableLimitation<RedeemableLimitationType>> = new Schema({

    type: {
        type: String,
        required: true,
    },
    payload: {
        type: Schema.Types.Mixed,
        required: false,
    },
}, { _id: false });

const RedeemableSchema: Schema<IRedeemableModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        redeemCount: {
            type: Number,
            required: true,
            default: 0,
        },
        objects: {
            type: [RedeemableObjectSchema],
            required: true,
            default: [],
        },
        limitations: {
            type: [RedeemableLimitationSchema],
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

export interface IRedeemableModel extends IRedeemable, Document {
}

export const RedeemableModel: Model<IRedeemableModel> = model<IRedeemableModel>('Redeemable', RedeemableSchema);
