/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent', () => {
    
    // eslint-disable-next-line no-undef
    test('Esta prueba no debe de fallar', () => {
        // 1.Inicializacíon 
        const message1 = 'Hola mundo'
        // 2. Estímulo
        const message2 = message1.trim();
        
        // 3.Observar el comportamiento... esperado 
        // eslint-disable-next-line no-undef
        expect( message1).toBe(message2)
    })
})