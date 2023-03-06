/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Stamp Award
 */

import { ObjectId } from "mongodb";

export enum StampAwardSourceType {

    REDEEMABLE = "REDEEMABLE",
}

export type StampAwardSourceTypePayloadMap = {

    [StampAwardSourceType.REDEEMABLE]: {
        readonly redeemableId: ObjectId;
    };
};

export interface IStampAwardConfig<T extends StampAwardSourceType> {

    readonly accountId: ObjectId;
    readonly stampId: ObjectId;

    readonly sourceType: T;
    readonly sourcePayload: StampAwardSourceTypePayloadMap[T];

    readonly awardedAt: Date;
}

export interface IStampAward<T extends StampAwardSourceType> extends IStampAwardConfig<T> {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
