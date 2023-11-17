import {render , screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe } from 'node:test'

describe('Home', () =>{
    it('should have Docs text', () =>{
        render(<Home />) //ARRANGE
    
        const myElem = screen.getByText('Docs')
        expect(myElem).toBeInTheDocument()
    })

    it('should contain the text "information"', () =>{
        render(<Home />) //ARRANGE
    
        const myElem = screen.getByText(/information/i)
        expect(myElem).toBeInTheDocument()
    })

    it('should have a heading', () => {
        render(<Home />)

        const myElem = screen.getByRole('heading', {
            name: 'Learn'
        })

        expect(myElem).toBeInTheDocument() 
    })
})


