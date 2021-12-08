import { formatJSONSuccessResponse, ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import schema from '@functions/filter/schema'
import { mongodbconnect } from '@core/utils/mongodb_connection'

const filter: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (context) =>  { 
    await mongodbconnect()
    const {product_name} = context.body
    const {restaurant_code} = context.headers
    //TODO: Importar repositorio para filtrar meseros por codigo o nombre
    return formatJSONSuccessResponse({
        success: true,
        payload: [{...product_name, ...restaurant_code}],
        message: "POST Filter waiters by code or name"
      });
}

export const main = middyfy(filter);