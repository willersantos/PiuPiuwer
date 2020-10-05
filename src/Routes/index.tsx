import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from '.././Pages/Login';
import SignUp_Passo1 from '.././Pages/SignUp_Passo1';
import SignUp_Passo2 from '.././Pages/SignUp_Passo2';
import Feed from '.././Pages/Feed';
import Redirection from './redirect';

function Rotas(){
    return(
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup1' component={SignUp_Passo1} />
                <Route path='/signup2' component={SignUp_Passo2} />
                <Route path='/feed' component={Feed} isPrivate />
                <Route component={Redirection} />
            </Switch>
    );
}
export default Rotas;