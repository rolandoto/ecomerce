import React, { useEffect, useState } from 'react'
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
import Badges from '../container/Badges'
import GridLoader from 'react-spinners/GridLoader'
import '../Componentes/styles/App.css'
function App  ()  {
    const [loading,setloading] = useState()

   useEffect(() =>{
       setloading(true)
       setTimeout(() => {
        setloading(false)
       }, 5000);
   },[])

    

    const initialstate = Useinitinialstate()
    return (
        <div className="App">
        {loading 
            ? 
        
            <GridLoader size={75} color={'#61dafb'} margin={50} loading={loading}/>

        :
    
    
      
         

                <Appcontex.Provider value={initialstate}>
    <BrowserRouter>
         <Layou>
        <Switch>
           
               {/** <Route exact path='/'  component={} />*/} 
              
             
               
                <Route exact path='/Chekaout'  component={Chekaout} />
                <Route exact path='/Information'  component={Information} />
                <Route exact path='/pyment'  component={pyment} />
                <Route exact path='/Sucess'  component={Sucess} />
                <Route exact path='/'  component={Badges} />
              
                <Route  component={notFound} />
              
        </Switch>
     
        </Layou>
     

    </BrowserRouter>
    </Appcontex.Provider>
  
}
</div>
    )
}

export default App
