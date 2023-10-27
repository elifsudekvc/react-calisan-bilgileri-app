import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className="errorModal">
      <div
        className="backdrop-blur-sm cursor-pointer bg-white/30 fixed w-screen h-screen top-0"
        onClick={props.HataMesaj}
      ></div>
      <Card className="w-[36rem] bg-white z-20 p-0">
        <header className="bg-red-700 p-4 text-white rounded-t-xl">
          <h2 className=" font-medium text-center">{props.error.baslik}</h2>
        </header>
        <section className="p-4">{props.error.mesaj}</section>
        <footer className="p-4 flex justify-end">
          <Button onClick={props.HataMesaj} >Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
