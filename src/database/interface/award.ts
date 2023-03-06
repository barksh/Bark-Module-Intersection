/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Award
 */

import { ObjectId } from "mongodb";

export enum AwardSourceType {

    REDEEMABLE = "REDEEMABLE",
}

export type AwardSourceTypePayloadMap = {

    [AwardSourceType.REDEEMABLE]: {
        readonly redeemableId: ObjectId;
    };
};

export interface IAwardConfig<T extends AwardSourceType> {

    readonly accountId: ObjectId;
    readonly stampId: ObjectId;

    readonly sourceType: T;
    readonly sourcePayload: AwardSourceTypePayloadMap[T];

    readonly awardedAt: Date;
}

export interface IAward<T extends AwardSourceType> extends IAwardConfig<T> {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
