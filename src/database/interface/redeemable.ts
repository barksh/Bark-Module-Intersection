/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Redeemable
 */

import { ObjectId } from "mongodb";

export enum RedeemableObjectType {

    STAMP = "STAMP",
}

export type RedeemableObjectTypePayloadMap = {

    [RedeemableObjectType.STAMP]: {
        readonly stampId: ObjectId;
    };
};

export type RedeemableObject<T extends RedeemableObjectType> = {

    readonly type: T;
    readonly payload: RedeemableObjectTypePayloadMap[T];
};

export enum RedeemableLimitationType {

    RECEIVER = "RECEIVER",
    REDEEM_COUNT_LIMIT = "REDEEM_COUNT_LIMIT",
}

export type RedeemableLimitationTypePayloadMap = {

    [RedeemableLimitationType.RECEIVER]: {
        readonly accountIdentifier?: string;
        readonly domain: string;
    };
    [RedeemableLimitationType.REDEEM_COUNT_LIMIT]: {
        readonly limit: number;
    };
};

export type RedeemableLimitation<T extends RedeemableLimitationType> = {

    readonly type: T;
    readonly payload: RedeemableLimitationTypePayloadMap[T];
};

export interface IRedeemableConfig {

    readonly objects: Array<RedeemableObject<RedeemableObjectType>>;
    readonly limitations: Array<RedeemableLimitation<RedeemableLimitationType>>;
}

export interface IRedeemable extends IRedeemableConfig {

    active: boolean;
    redeemCount: number;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
