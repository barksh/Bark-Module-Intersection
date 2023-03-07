/**
 * @author WMXPY
 * @namespace Handlers_Award
 * @description Request Redeemable
 */

import { BarkAuthenticationToken } from "@barksh/token-node";
import { LambdaVerifier, VerifiedAPIGatewayProxyEvent } from "@sudoo/lambda-verify";
import { createStrictMapPattern } from "@sudoo/pattern";
import { APIGatewayProxyHandler, APIGatewayProxyResult, Context } from "aws-lambda";
import { verifyAndGetToken } from "../common/authentication";
import { createSucceedLambdaResponse } from "../common/response";
import { wrapHandler } from "../common/setup";

const verifier: LambdaVerifier = LambdaVerifier.create()
    .setBodyPattern(
        createStrictMapPattern({
        }),
    );

type Body = {
    // Nothing
};

export const awardPostRequestRedeemableHandler: APIGatewayProxyHandler = wrapHandler(verifier,
    async (
        event: VerifiedAPIGatewayProxyEvent,
        _context: Context,
    ): Promise<APIGatewayProxyResult> => {

        const body: Body = event.verifiedBody;

        const token: BarkAuthenticationToken = verifyAndGetToken(event.headers);

        console.log('Token', token);

        return createSucceedLambdaResponse({
            ...body,
        });
    },
);
