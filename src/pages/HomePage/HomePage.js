import c from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={c.wrapper}>
      <h1 className={c.title}>Phonebook Welcome Page </h1>
      <p>Please Register or Login</p>
    </div>
  );
};

export default HomePage;
