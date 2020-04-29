import React from 'react'
import { createComponent } from 'react-fela'

 const PaddingContainer = createComponent(() => ({
    padding: '48px'
}), 'div')



const PageWrapper = ({children}) => (
        <PaddingContainer>
            {children}
        </PaddingContainer>
)
export default PageWrapper