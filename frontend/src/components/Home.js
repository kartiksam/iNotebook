import Notes from "./Notes";
function Home(props) {
  // in functional componenst between function and return and in class bwtenn return and render
  const { showAlert } = props;
  return (
    <div className="container">
      <Notes showAlert={showAlert}></Notes>
    </div>
  );
}

export default Home;
