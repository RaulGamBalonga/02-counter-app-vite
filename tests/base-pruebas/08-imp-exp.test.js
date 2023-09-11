import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

/* eslint-disable no-undef */
describe("pruebas en 08-imp-exp", () => {
    
    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );
        // console.log( hero );

        expect( hero ).toEqual({ id: 1, name:'Batman', owner:'DC'})



    })
    
    test('getHeroeById debe de retornar undefined si no existe el ID ', () => {

        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy();
    })
    
    test ('getHeroesByOwner debe de retornar un arreglo con los héroes de DC  ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        //  console.log( heroes );
        expect( heroes.length).toBe( 3 )
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner:'DC'},
            { id: 3, name: 'Superman', owner:'DC'},
            { id: 4, name: 'Flash', owner:'DC'}
        ])

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

    });
    test ('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel  ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        //  console.log( heroes );
        expect( heroes.length).toBe( 2 )
        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner:'Marvel'},
            { id: 5, name: 'Wolverine', owner:'Marvel'},
        ])

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

    });
});