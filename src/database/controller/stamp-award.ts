/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Stamp Award
 */

import { IStampAwardConfig, StampAwardSourceType } from "../interface/stamp-award";
import { IStampAwardModel, StampAwardModel } from "../model/stamp-award";

export type CreateUnsavedStampAwardConfig<T extends StampAwardSourceType> = {
    // Nothing
} & IStampAwardConfig<T>;

export const createUnsavedStampAward = <T extends StampAwardSourceType>(
    config: CreateUnsavedStampAwardConfig<T>,
): IStampAwardModel => {

    const stampAwardConfig: IStampAwardConfig<T> = {
        ...config,
    };
    return new StampAwardModel(stampAwardConfig);
};
