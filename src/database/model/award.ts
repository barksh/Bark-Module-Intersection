/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Award
 */

import { Document, model, Model, Schema } from "mongoose";
import { IAward } from "../interface/award";

const AwardSchema: Schema<IAwardModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        accountId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        stampId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        awardedAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

export interface IAwardModel extends IAward, Document {
}

export const AwardModel: Model<IAwardModel> = model<IAwardModel>('Award', AwardSchema);
