import prismaClient from "../../prisma";

interface ProductRequest {
    nome: string;
    valor: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({nome, valor, description, banner, category_id}: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                name: nome,
                price: valor,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })

        return product;

    }
}

export { CreateProductService }

