/* eslint-disable no-unused-vars */
import { getAllByAltText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

/* eslint-disable no-undef */
describe(' Pruebas en <FirstApp />', () => { 
    test('deebe de hacer match con el snapshot', () => {
        
        const title = 'Hola, soy un Gnomo!'
        const { container } = render(<FirstApp title="title"/>)

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el título en un h1', () => { 
        
        const title = "Hola, soy un Gnomo!";
        const { container, getByText, getByTestId } = render(<FirstApp title="title" />);

        expect( getByText( title ) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // console.log( h1.innerHTML);
        // expect(h1.innerHTML).toBe( title )
        // expect(h1.innerHTML).toContain( title )
        
        expect( getTestById( 'test-title').innerHTML ).toContain( title )
       
        
        
    })
    
    test('debe de mostrar el subtítulo enviado por props', () => { 
        const title = "Hola, soy un Gnomo!";
        const subtitle = "soy un subtitulo";
        const { getAllByAltText } = render(
        <FirstApp 
            title={ title }
            subtitle={ subtitle } 

        />);
        expect( getAllByAltText (subtitle).length).toBe(2);
        
     })
})