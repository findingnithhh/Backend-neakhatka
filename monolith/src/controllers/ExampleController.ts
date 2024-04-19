import { Controller, Get, Route } from "tsoa";

@Route("/")
export class ExampleController extends Controller {
  @Get("/")
  public async getExample(): Promise<string> {
    return "ok";
  }
}
