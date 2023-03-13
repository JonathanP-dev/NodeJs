import inquirer from 'inquirer';
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Crear tarea'
            },
            {
                value: '3',
                name: '3. Crear tarea'
            },
            {
                value: '4',
                name: '4. Crear tarea'
            },
            {
                value: '5',
                name: '5. Crear tarea'
            },
            {
                value: '6',
                name: '6. Crear tarea'
            },
            {
                value: '0',
                name: '0. Crear tarea'
            },
        ]
    }
]


const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ];
    await inquirer.prompt( question )
}
const inquireMenu = async () => {
    console.clear()
    console.log( '========================='.green )
    console.log( '  Seleccione una opcion'.green )
    console.log( '=========================\n'.green )


    const { opcion } = await inquirer.prompt( preguntas )

    return opcion;
}

export { inquireMenu, pausa };