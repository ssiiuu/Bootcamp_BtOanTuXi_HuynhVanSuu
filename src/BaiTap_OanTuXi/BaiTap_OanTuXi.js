import React, { useEffect, useState } from "react";
import "./BaiTap_OanTuXi.css";
import Computer from "./Computer";
import Player from "./Player";
import KetQua from "./KetQua";
export default function BaiTap_OanTuXi(props) {
  const [mangDatCuoc, setMangDatCuoc] = useState([
    { ma: "keo", hinhAnh: "../img/keo.png", isDatCuoc: true },
    { ma: "bua", hinhAnh: "../img/bua.png", isDatCuoc: false },
    { ma: "bao", hinhAnh: "../img/bao.png", isDatCuoc: false },
  ]);

  //---------- chọn đặt cược player---------

  let datCuoc = (ma) => {
    let mangDatCuocUpdate = [...mangDatCuoc];
    mangDatCuocUpdate = mangDatCuocUpdate.map((item) => {
      if (item.ma === ma) {
        return { ...item, isDatCuoc: true };
      }
      return { ...item, isDatCuoc: false };
    });
    // console.log("mangDatCuoc", mangDatCuoc);
    // console.log("mangDatCuocUpdate", mangDatCuocUpdate);

    setMangDatCuoc(mangDatCuocUpdate);
  };

  // ----------------Random computerplayer--------------

  let [computerRandom, setComputerRandom] = useState({
    ma: "keo",
    hinhAnh: "../img/keo.png",
  });

  let handlePlayGame = () => {
    let count = 0;
    let computerRandomItem = setInterval(() => {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = mangDatCuoc[soNgauNhien];
      setComputerRandom(quanCuocNgauNhien);
      computerRandom = quanCuocNgauNhien;
      count++;
      if (count > 2) {
        clearInterval(computerRandomItem);

        xuatKetQua();
      }
    }, 100);
  };

  //----------- Xuất kết quả--------------------
  const [ketQua, setKetQua] = useState("I am Iron Man !!!");
  const [soLuotChoi, setSoLuotChoi] = useState(0);
  const [soLuotThang, setSoLuotThang] = useState(0);

  let xuatKetQua = () => {
    let player = mangDatCuoc.find((item) => item.isDatCuoc);
    let computer = computerRandom;
    console.log("player", player.ma);
    console.log("computer", computer.ma);
    switch (player.ma) {
      case "keo": {
        if (computer.ma === "keo") {
          setKetQua("Bất phân thắng bại !!!");
        } else if (computer.ma === "bao") {
          setKetQua("I love you 3000 !!!");
          setSoLuotThang(soLuotThang + 1);
        } else {
          setKetQua("Chúc bạn may mắn lần sau !!!");
        }
        setSoLuotChoi(soLuotChoi + 1);
        break;
      }

      case "bua": {
        if (computer.ma === "bua") {
          setKetQua("Bất phân thắng bại !!!");
        } else if (computer.ma === "keo") {
          setKetQua("I love you 3000 !!!");
          setSoLuotThang(soLuotThang + 1);
        } else {
          setKetQua("Chúc bạn may mắn lần sau !!!");
        }
        setSoLuotChoi(soLuotChoi + 1);
        break;
      }

      case "bao": {
        if (computer.ma === "bao") {
          setKetQua("Bất phân thắng bại !!!");
        } else if (computer.ma === "bua") {
          setKetQua("I love you 3000 !!!");
          setSoLuotThang(soLuotThang + 1);
        } else {
          setKetQua("Chúc bạn may mắn lần sau !!!");
        }
        setSoLuotChoi(soLuotChoi + 1);
        break;
      }

      default:
        setKetQua("Victory !!!");
        setSoLuotThang(soLuotThang + 1);
        setSoLuotChoi(soLuotChoi + 1);
        break;
    }
    // console.log("ketQua", ketQua);
  };
  return (
    <div className="bgGame text-center pt-3">
      <div className="row">
        <div className="col-4">
          <Player mangDatCuoc={mangDatCuoc} datCuoc={datCuoc} />
        </div>
        <div className="col-4">
          <KetQua
            ketQua={ketQua}
            soLuotChoi={soLuotChoi}
            soLuotThang={soLuotThang}
          />
          <button onClick={handlePlayGame} className="btn btn-success mt-4">
            <span style={{ fontSize: 40 }}>Play Game</span>
          </button>
        </div>
        <div className="col-4">
          <Computer computerRandom={computerRandom} />
        </div>
      </div>
    </div>
  );
}
