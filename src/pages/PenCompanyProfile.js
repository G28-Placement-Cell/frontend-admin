import React from "react";
import { useState, useEffect } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCardCompany";

// const companyData = [
//   {
//     id: "01",
//     isRejected: "0",
//     name: "Google",
//     photoUrl:
//       "data:image/png;base64,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",
//   },
//   {
//     id: "02",
//     isRejected: "0",
//     name: "Microsoft",
//     photoUrl:
//       "https://assets.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png",
//   },
//   {
//     id: "03",
//     isRejected: "0",
//     name: "Sprinklr",
//     photoUrl:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA+VBMVEX///8Au+ohNT7/ogA5uk0Ais0AHCkAICwAJC8WLTfd3+C1uLoAHipqdHkaMDpncXbt7++NlJcPKTROW2HKzc8At+n19vcAGCb/ngAAFCPFycthbHHl5+jw8fKus7UAgsoAABiepKcdtTkAhcu86fhBxu3/267/8uDx+/7//vqBiY06SlKiqKsAAAze9fyL2fNkxnLv+fGR1ZotQEgbkdCl4fZSyu7/x3z/ulr/0JX/rTP/vmn/48Anwex1foP/4Ln/qib/9+xVYWf/zYxCUFfG6ctJv1ve8uGlzulKodaAueCd2aVzy4BbqNnU6PW5476OweTT7tbP7/olGcwcAAAGpElEQVR4nO2aeUPaSBiH4yhJJsAIgXCEG8UDrLbGdq9Cj6XVXna33//D7DuTG0Grguyyv+cPTSaZJPNk3pk3o5oGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf8HRuh9g3ewPHMcZv3yCO1UKrcJMUavVqjzBne/glbMlccar7wztrtGdKWpUq42V3zfg8ODgcF750XgrZLyM+7jtW15r1mTGTNEu5/ll3Pcn+KVG/Hp8o/xo7EQOnCWEQ7FusMVH1+rgt9o2Ufv9hoTBVoLB42/EBKuWFx5dp4NjpUBKmDlw5iQdbD3+Tg2D11sLj67TwWHgYLv2R6r8NK1g6/GjYmW4u7gb/DscbNcOkuWDtIIl9IPbWet4sB1RexeX7s90g1erfoy1Ongdd4RENIzTCpzTVT/GeufG19vRkBClCTPdwNmfUy87KXnTfNbfabWzbQr5k8Zo1OiFCV+FCpvyd7ZHP8vtrCtLC1RKiYI19HTdm1jh1WIHzXJZDRyxg6a6urzLyTJbnuTN29pMR0iNBs54Ti+wvBwXQnBDKAtW19A11zapjJu54EkLXbNLzS6a+oj2hvXcVJaWqbSpFau2YIzxes8/N3bQsvXuUG7EDqjKM9I2NFaZOP5WS40IqUlhbn5UqApm67puCq4SH0tnzK2TkpxJTasW/ZNyzChrI5MJ6aBoi5JqkMH0yiQnbP/cuj9ZxA6mnKvzkg4MVtUKns3sVQbHoQqIcGpI5gbzOoGmTeh5es1KM/v+merN5MBjIjd0LbdhUMP8Xi8dlDgzddmohAPeM2zWK1tZTzDuv9rIwdBkph9MKQd6y+NcH60sFiTvpIQwUYpHRGfBhOAJO3icpvop+4HgfnC3c0x4coMciLwt/GhJOmDCnKiyCnUEW22FDrJVVnX9K6ccsAk3G82lNXc+7+JgiENhkQJ6diOV8EgHelgytP1tckDNHQXJYdKBPdHCQlZVLQscNA1mDoNjaQfCKC6lnbcis6Xaa7n10rlDgaaNBE8NT+RAvA93Wgaz5QMrBzz8WEw64OGp1HTdCjakA0+osUORdvA08+Sb2nbtT7nx6u4vpZ7O7JEb75MDM47Vkm9IOshFJyUc2NErdU2WCx2IxvspZ7mow6cdGE+znkJf0Wp2jELhlnMbFOuGOQynd3KQCA5qrpwG5XgwShaGDuJTXSN2wGiuZXY7qpByYA+1J+F4u/ZWi4eD25PDkyrNbHa1EY2JuhUd69mq7eQgfuOpuTF61ykH9TpFVCmqkHJg3PK99Ug+PO9/PL8M9ygatChJTOQFR1efMhefZz8d21OdM+6vCaQdxP3AcJOFkYNo6TDpwKQhkUaFKKTS+cHsauPS+NLfIfpfXwT7b2taNCTG62dXmU4mk9nL3Ph+tvL04sIcyYyb24jGg3SA3O5AjoknNC+EiwxpB6saDi6VAmnhu19wIB2cpSPh6JM0ICV8u3kFOabJtpODOGIrMoHSHuRAm8YTztM4ON8J6Z+rgmMZC/5qcjgtXlMHCOjMucRUqPlA5gdm2LIeTfqyYQ9xYC3IkZ7AAcWDKpH5wSDZDa47mcwcB4VwVPOYKUdy6YBPgyemAFGbD3EgEyzhH5twFizCrtLB9/4NCVrgIOgGSQWZi7jmbnUoW1eZBK9cOvAoY6hozaL8XlDtepADTYRR1TMZL6n1+FU60D4mJZwHhYO4G5zuJRR0rqN62S7jhul5JkW+Cl85HrhVYZo2fQ2Juj/JP8yBq/tatYIhmOha2oodHJ/v9IlAwge/cBBniBf+YLjXIT7FCrTWpE6f/5TSCN2fz+XcqJX99QODBQFNH9h6woFh+w7qvB7nB3W76zuo8npQ1rC5+uTSyqZhqx5FVbqrTBOPX1x++PJ8R3ro+1PkIMoNvlE32OtcfL66Pp2dF5vFkW0YvBSsI0kHFbWOVJpkw3MK3siLHbTzedXHrd18I+oH1rB3ouZCdze/G16aqvlJQiVbzFtBldWnyseULO3s+EMCfS44qsk0GHQyf10vqlMpFKIH8x3857n82u//LTdehaFw0bm4+snKG+KALHx8Ln+dOX4oXHd+1sAGOaCEQY4I+47zQ+58vseC+gY5UJw6zr3rbJoDzbn/vxtsnIPx/f+ytnEOzs7uXWXjHPx4gIOu8WyjHGj3/wtroe1ad58FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEP8AdjuNUFqRIhIAAAAASUVORK5CYII=",
//   },
//   {
//     id: "04",
//     isRejected: "0",
//     name: "De Shaw",
//     photoUrl:
//       "data:image/png;base64,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",
//   },
// ];



function PenCompanyProfile() {

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/company/getpencompany", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanyData(data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      {companyData.map((company, index) => (
        <PendingCard
          key={index}
          student_company={company}
        />
      ))}
    </div>
  );
}

export default PenCompanyProfile;
