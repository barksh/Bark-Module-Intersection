/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Redeemable
 */

import { Document, model, Model, Schema } from "mongoose";
import { IRedeemable, RedeemableLimitation, RedeemableLimitationType } from "../interface/redeemable";

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
