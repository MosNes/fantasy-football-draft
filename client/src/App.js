import React from  'react';

//import Apollo for graphQL functionality
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

//import React Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import components
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

//create connection to backend apollo server
const httpLink = createHttpLink({
  uri: '/graphql',
});

//create middleware function to retrieve token and combine it with httpLink
// '_' is a placeholder since we don't need the first param in this particular case
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

//concat combines authLink headers with httpLink uri
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="App">
//           <Header />
//           <Home />
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
    
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />

          <Routes>
          <Route path="dashboard/:leagueId" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
