import React from 'react';
import Layout from './core/Layout';

const App = () => {
  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
          <h1 className="p-5">Internal Hiring Website Homepage</h1>
          <hr />
          <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit ante a venenatis laoreet. Maecenas finibus erat et odio mollis, nec lacinia arcu euismod. Aliquam ut dolor non quam ullamcorper pulvinar in sit amet nibh. Ut volutpat est non erat congue, volutpat ornare odio tempus. Mauris a sollicitudin lectus, sit amet lobortis odio. Donec malesuada quis nunc egestas feugiat. In eu odio blandit, posuere erat consectetur, gravida mauris.
          </p>
      </div>
    </Layout>
  );
};

export default App;
