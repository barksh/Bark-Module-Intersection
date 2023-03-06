/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Award
 */

import { Document, model, Model, Schema } from "mongoose";
import { AwardSourceType, IAward } from "../interface/award";

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

export interface IAwardModel extends IAward<AwardSourceType>, Document {
}

export const AwardModel: Model<IAwardModel> = model<IAwardModel>('Award', AwardSchema);
