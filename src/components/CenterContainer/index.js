import React from 'react'
import { createComponent } from 'react-fela'

 const CenteredContent = createComponent(() => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '24px'
}), 'div')



const CenterContainer = ({children}) => (
        <CenteredContent>
            {children}
        </CenteredContent>
)
export default CenterContainer