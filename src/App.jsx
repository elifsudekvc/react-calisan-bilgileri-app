import { Fragment, useState } from "react";
import CalisanEkle from "./components/Calisan/CalisanEkle";
import CalisanListesi from "./components/Calisan/CalisanListesi";

function App() {
  const [calisanlar, setCalisanlar] = useState([])
  
  return (
    <Fragment>
      <h2 className="text-center text-2xl text-cyan-800 font-medium">
        Çalışan Otomasyonu
      </h2>
      <CalisanEkle setCalisanlar={setCalisanlar}/>
      <CalisanListesi calisanlar={calisanlar} setCalisanlar={setCalisanlar}/>
    </Fragment>
  );
}

export default App;
