import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Layou } from '../component/Layou'


import Chekaout from '../container/Chekaout'
import Home from '../container/Home'
import Information from '../container/Information'
import notFound from '../container/Notfound'
import pyment from '../container/Pyment'
import Sucess from '../container/Sucess'
// aqui le estoy pasando las funciones y el estado 
import Useinitinialstate from '../Hooks/Useinitinialstate'
import Appcontex from '../context/Appcontex'

function App  ()  {
    
    const initialstate = Useinitinialstate()
    return (
    <Appcontex.Provider value={initialstate}>
    <BrowserRouter>
         <Layou>
        <Switch>
           
               {/** <Route exact path='/'  component={} />*/} 
              

                <Route exact path='/'  component={Home} />
                <Route exact path='/Chekaout'  component={Chekaout} />
                <Route exact path='/Information'  component={Information} />
                <Route exact path='/pyment'  component={pyment} />
                <Route exact path='/Sucess'  component={Sucess} />
                <Route  component={notFound} />
              
        </Switch>
     
        </Layou>
     

    </BrowserRouter>
    </Appcontex.Provider>
    )
}

export default App
