import Card from "../UI/Card";
import { DeleteOutlined } from "@ant-design/icons";

const CalisanListesi = (props) => {
  const { calisanlar, setCalisanlar } = props;
  console.log(calisanlar);
  const calisanSil = (id) => {
    setCalisanlar(calisanlar.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-5">
      <Card>
        <ul>
          <li className="flex justify-between p-2">
            <span className="font-medium text-cyan-900">Çalışan İsmi</span>
            <span className="font-medium text-cyan-900">Çalışan Departman</span>
            <span className="font-medium text-cyan-900">Çalışan Maaş</span>
            <span className="font-medium text-cyan-900">Çalışan Sil</span>
          </li>

          {calisanlar.map((calisan) => (
            <li
              className="flex justify-between hover:shadow-xl p-2"
              key={calisan.id}
              
            >
              <span>{calisan.isim}</span>
              <span>{calisan.departman}</span>
              <span>{calisan.maas}</span>
              <span onClick={() => calisanSil(calisan.id)}>
                <DeleteOutlined className="cursor-pointer hover:text-red-700" />
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default CalisanListesi;
