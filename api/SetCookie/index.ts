import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: 'Hello, world.',
    cookies: [
      {
        name: 'cookie1',
        value: 'value1'
      },
      {
        name: 'cookie2',
        value: 'value2'
      }
    ]
  }
}

export default httpTrigger