const Card = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Hello world</h1>
      <Card title="Apple classification" />
    </div>
  );
};

export default App;
