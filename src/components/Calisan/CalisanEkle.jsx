import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const CalisanEkle = (props) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [wage, setWage] = useState("");
  const [error, setError]= useState();
  const minimumMaas = 11000;

  const CalisanEklendi = (e) => {
    e.preventDefault();

    if (name === "") {
      setError({
        baslik: "İsim Alanı Zorunludur.",
        mesaj: "Lütfen bir isim giriniz."
      })
      return;
    }

    if (department === "") {
      setError({
        baslik: "Departman Alanı Zorunludur.",
        mesaj: "Lütfen bir departman giriniz."
      })
      return;
    }

    if (+wage < minimumMaas) {
      setError({
        baslik: "Maaş Alanı Zorunludur.",
        mesaj: `Lütfen minimum ${minimumMaas} değerinde bir maaş giriniz.`
      })
      return;
    }

    props.setCalisanlar((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        isim: name,
        departman: department,
        maas: wage,
      },
      ...prevState,
    ]);

    setName("");
    setDepartment("");
    setWage("");
  };

  const HataMesaj =()=>{
  setError(null);
  }

  return (
    <div>
    {error && <ErrorModal HataMesaj={HataMesaj} error={error} />}
    <Card className="mt-5">
      <form className="flex flex-col gap-y-1" onSubmit={CalisanEklendi}>
        <label htmlFor="isim" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          placeholder="Çalışan ismi giriniz"
          id="isim"
          className="max-w-[80rem] w-full mx-auto border p-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label htmlFor="departman" className="font-medium">
          Çalışan Departmanı
        </label>
        <input
          type="text"
          placeholder="Çalışan departmanı giriniz"
          id="departman"
          className="max-w-[80rem] w-full mx-auto border p-2"
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
          value={department}
        />
        <label htmlFor="maas" className="font-medium">
          Çalışan Maaşı
        </label>
        <input
          type="number"
          placeholder="Çalışan maaşı giriniz (En az 11000 girilmelidir.)"
          id="maas"
          className="max-w-[80rem] w-full mx-auto border p-2"
          onChange={(e) => {
            setWage(e.target.value);
          }}
          value={wage}
        />
        <Button className="mt-3">Ekle</Button>
      </form>
    </Card>
    </div>
  );
};

export default CalisanEkle;
