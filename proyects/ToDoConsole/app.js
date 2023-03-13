import 'colors';


import { inquireMenu, pausa } from './helpers/inquirer.js';



console.clear();

const main = async () => {
    console.log( 'hola mundo'.green )

    let opt = '';

    do {
        opt = await inquireMenu()
        console.log( { opt } );

        if ( opt !== '0' ) await pausa();


    } while ( opt !== '0' );

}

main();