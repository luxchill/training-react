import imggaixinh from "./image/img4.jpg";

const dataBook = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hwUY5ZmxL._AC_UL254_SR254,254_.jpg",
    title: "Interesting Facts For Curious",
    author: "Jordan Moore",
  },
  {
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71CX11nGhWL._SY466_.jpg",
    title: "Oath and Honor",
    author: " Liz Cheney ",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/91n7p-j5aqL._AC_UL254_SR254,254_.jpg",
    title: "Fourth Wing",
    author: " Rebecca Yarros ",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pL+3nMzfL._AC_UL254_SR254,254_.jpg",
    title: "No Brainer",
    author: " Jeff Kinney",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src={imggaixinh} alt="Interesting Facts" />;
const Title = () => <h1>Interesting Facts For Curious</h1>;
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75", marginTop: "0.5rem" }}>
      {" "}
      Jordan Moore{" "}
    </h4>
  );
};

function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;
