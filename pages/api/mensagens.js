import { SiteClient } from 'datocms-client';

export default async function recebedorDeMensagens(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '1dd9fab4a9ae9aec4cc36765a7a394';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const mensagemCriada = await client.items.create({
            itemType: "972678", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto"
        })

        console.log(mensagemCriada);

        response.json({
            dados: 'Algum dado qualquer',
            mensagemCriada: mensagemCriada,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}