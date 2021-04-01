import './App.css';
import 'rapidoc';

function App() {
  return (
    <rapi-doc
      style={{ height: "100vh", width: "100%" }}
      spec-url="https://petstore.swagger.io/v2/swagger.json"
      // note: an error occurred in setting render-style as'read'
      // -> Unhandled Rejection (TypeError): Cannot read property 'servers' of undefined
      render-style="focused"
      theme="light"
      nav-bg-color="#E8E8E8"
    >
      <slot>
        <h3 className="custom-title">🧡 my lovely APIs 🧡</h3>
      </slot>
    </rapi-doc>
  );
}

export default App;
