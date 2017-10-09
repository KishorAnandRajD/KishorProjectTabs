import {Breadcrumbs} from 'react-breadcrumbs-dynamic'

const Page = (props) => (
  return (
    <div className="App">
      <Header>
        <Breadcrumbs
          separator={<b> / </b>}
          item={NavLink}
          finalItem={'b'}
          finalProps={{
            style: {color: 'red'}
          }}
        />
      </Header>
      {props.children}
      <Footer>
        <Breadcrumbs/>
      </Footer>
    </div>
  )
}
