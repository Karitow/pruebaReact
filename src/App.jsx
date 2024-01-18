import "./App.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header titulo="Dulzura a tu mesa" />
      <section className="MyCards">
        <MyCard
          img="https://th.bing.com/th/id/OIP.vcmtWoc9i7T_1pzntoSvwwHaGa?w=221&h=191&c=7&r=0&o=5&pid=1.7"
          producto="Galletas personalizadas"
          descripcion="Buscas un regalo especial, nuestras galletas personalizadas son ideal para sorprender. Creamos nuestras galletas totalmente creadas para ese alguien especial."
          valor="$20.000"
        />
        <MyCard
          img="https://th.bing.com/th/id/OIP.7E-eRaDZCd9ngHxY0upElwHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7"
          producto="Galletas de chocolate"
          descripcion="Clásicas galletas con chips de chocolate, ideales para comenzar el dia con energía."
          valor="$12.000"
        />
        <MyCard
          img="https://th.bing.com/th?id=OIP.F7SdHBnhRaWlhR9Zs9iwDQHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          producto="Bombones rellenos"
          descripcion="Caja de 12 bombones rellenos con sabor a elección ideal para regalar y sorprender a tu persona favorita."
          valor="$22.000"
        />
        <MyCard
          img="https://th.bing.com/th/id/OIF.ddYX5iBoRmp7kgKmMhtEIA?rs=1&pid=ImgDetMain"
          producto="Torta"
          descripcion="Nuestra torta de la casa para 20 personas, sabor a frambuesa con bizcocho de chocolate"
          valor="$35.000"
        />
      </section>
      <Footer />
    </>
  );
};

export default App;