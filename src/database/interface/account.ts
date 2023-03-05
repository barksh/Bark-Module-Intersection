/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Account
 */

export interface IAccountConfig {

    readonly domain: string;
    readonly identifier: string;
}

export interface IAccount extends IAccountConfig {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
