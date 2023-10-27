import Button from "./Button";
import Card from "./Card";
import { Fragment } from "react";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm cursor-pointer bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.HataMesaj}
    ></div>
  );
};

const Modal = (props) => {
  return (
    <div className="errorModal">
      <Card className="w-[36rem] bg-white z-20 !p-0">
        <header className="bg-red-700 p-4 text-white rounded-t-xl">
          <h2 className=" font-medium text-center">{props.error.baslik}</h2>
        </header>
        <section className="p-4">{props.error.mesaj}</section>
        <footer className="p-4 flex justify-end">
          <Button onClick={props.HataMesaj}>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const {HataMesaj, error}=props;
  const {baslik, mesaj} = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop HataMesaj={HataMesaj}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<Modal baslik={baslik} mesaj={mesaj} HataMesaj={HataMesaj} error={error} />, document.getElementById("modal-root"))}
    </Fragment>
  );
};

export default ErrorModal;
