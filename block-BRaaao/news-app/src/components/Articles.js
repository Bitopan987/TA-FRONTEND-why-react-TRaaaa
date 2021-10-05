function Articles() {
  return (
    <>
      <Article title="This is the title of the article" />
      <Article title="This is the title of the article" />
      <Article title="This is the title of the article" />
    </>
  );
}

export function Article(props) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1633287838491-3c4ef7e643bd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h3>{props.title}</h3>
    </div>
  );
}
export default Articles;
