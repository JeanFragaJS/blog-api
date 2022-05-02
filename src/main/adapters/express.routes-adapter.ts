import { Controller } from "@src/presentation/protocols/controller";
import { HttpRequest } from "@src/presentation/protocols/http";


export const adapterRouter = (controller: Controller) => {
  return  async ( req, res ) => {

    const httpRequest: HttpRequest = {  body: req.body }

    const httpResponse = await controller.handle(httpRequest)

    //condicional de retorno 
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message
      })
    }

  }
}