/* eslint-disable no-undef */
describe('pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "hola feranado" ', () => {
        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`hola ${ name }`)
    });
});