module.exports.getTopPosts = (id, cb) => {
    cb([
        {
            'id': 1,
            'owner': "Emicida",
            'content': "Ouça já o novo album AmarElo, já disponível em todas as plataformas."
        },
        {
            'id': 2,
            'owner': "Iron Maiden",
            'content': "Já viu o novo Funko do Eddie? Não? Poxa. Corre agora pra ver!!!!"
        },
        {
            'id': 3,
            'owner': "Trent Reznor", 
            'content': "Veja meu novo cover de David Bowie para a série Watchman, o bagulho tá INSANO."
        }
    ])
}