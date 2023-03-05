/**
 * @author WMXPY
 * @namespace Handlers_Authentication
 * @description Inquiry
 */

import { LambdaVerifier, VerifiedAPIGatewayProxyEvent } from "@sudoo/lambda-verify";
import { createStrictMapPattern, createStringPattern } from "@sudoo/pattern";
import { APIGatewayProxyHandler, APIGatewayProxyResult, Context } from "aws-lambda";
import { createSucceedLambdaResponse } from "../common/response";
import { wrapHandler } from "../common/setup";

const verifier: LambdaVerifier = LambdaVerifier.create()
    .setBodyPattern(
        createStrictMapPattern({
            domain: createStringPattern(),
            callbackUrl: createStringPattern({
                optional: true,
            }),
        }),
    );

type Body = {

    readonly domain: string;
    readonly callbackUrl?: string;
};

export const authenticationPostInquiryHandler: APIGatewayProxyHandler = wrapHandler(verifier,
    async (
        event: VerifiedAPIGatewayProxyEvent,
        _context: Context,
    ): Promise<APIGatewayProxyResult> => {

        const body: Body = event.verifiedBody;

        console.log(body);

        return createSucceedLambdaResponse({
        });
    },
);
