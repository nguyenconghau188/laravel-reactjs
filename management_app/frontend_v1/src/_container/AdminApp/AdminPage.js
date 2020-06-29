import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Userlist1 from './User/Userlist1';
import Userlist2 from './User/Userlist2';
import Userlist3 from './User/Userlist3';

class AdminPage extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Admin page
                </h1>
                <ul>
                    <li>
                        <Link to='/admin/user/list1'>User list 1</Link>
                        <Link to='/admin/user/list2'>User list 2</Link>
                        <Link to='/admin/user/list3'>User list 3</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/admin/user/list1' component={Userlist1} />
                    <Route path='/admin/user/list2' component={Userlist2} />
                    <Route path='/admin/user/list3' component={Userlist3} />
                </Switch>
            </div>
        );
    };
}

export default AdminPage;