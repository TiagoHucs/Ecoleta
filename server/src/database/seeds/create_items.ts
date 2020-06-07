import Knex from 'knex'

export async function seed(knex: Knex) {
   await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'pilhas.svg' },
        { title: 'Papeis e Papelão', image: 'papeis.svg' },
        { title: 'Resíduos Eletronicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de cozinha', image: 'oleo.svg' },
    ]);
}