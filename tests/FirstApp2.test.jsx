/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

/* eslint-disable no-undef */
describe(" Pruebas en <FirstApp2 />", () => {

    const title = 'Hola, Soy Goku';
    const subtitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot ', () => { 
        
        const { container } = render( <FirstApp title= {title} />)
        expect( container ).toMatchSnapshot();
        
    })
    
    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => { 
        
        // screen.debug(); *******!!!
        render( <FirstApp title= {title} />)
        expect( screen.getByText(title) ).toBeTruthy();
        
    })
    
    test('debe de mostrar el título en un h1', () => { 
        
        render( <FirstApp title= {title} />)
        expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain( title ); 
       })
    
    test('debe de mostrar el el subtitulo enviado por props', () => { 
        
        render( 
        <FirstApp 
            title= { title } 
            subTitlele= { subtitle } 
        />)
        expect( screen.getAllByText( subtitle).length ).toBe(2);
       })
 
});
