import { formatJSONSuccessResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';

const search: APIGatewayProxyHandler = async (context) => {
    const {code} = context.pathParameters
    return formatJSONSuccessResponse({
      success: true,
      payload: {code},
      message: `Hello GET Search waiter by code`
    });
  }

export const main = middyfy(search);