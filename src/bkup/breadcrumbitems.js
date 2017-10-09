import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic'

const App = (props) => (
  <div>
    <BreadcrumbsItem to='/'>Main Page</BreadcrumbsItem>
    {props.children}
    <Route exact path="/user" component={User} />
  </div>
)


const User = (props) => (
  <div>
    <BreadcrumbsItem to='/user'>Home</BreadcrumbsItem>
    <h2>Home</h2>
    {props.children}
    <Route exact path="/user/contacts" component={Contacts} />
  </div>
)

const Contacts = (props) => (
  <div>
    <BreadcrumbsItem to='/user/contacts'>Contacts</BreadcrumbsItem>
    <h2>Contacts</h2>
    ...
  </div>
)
