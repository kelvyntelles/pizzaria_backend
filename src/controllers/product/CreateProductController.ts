import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { description, category_id } = req.body
        const { nome } = req.body;
        const { valor } = req.body;

        const createProductService = new CreateProductService();

        if(!req.file) {
            throw new Error("Error upload file")
        } else {
            const { originalname, filename: banner } = req.file;

            const product = await createProductService.execute({
                nome,
                valor,
                description,
                banner,
                category_id,
            });

            return res.json(product)
        }

    }
}

export { CreateProductController }