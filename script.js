     document.addEventListener("DOMContentLoaded", hentJson);
     let valueArray = [];
     let offsetArray = [0];
     let omkreds = 200 * Math.PI;
     let myData;
     async function hentJson() {
         let myJson = await fetch("data.json");
         myData = await myJson.json();
         //console.log(myData);
         lavArray();
     }

     function lavArray() {
         myData.forEach(data => {
             offsetArray.push(data.value + offsetArray[offsetArray.length - 1]);
             valueArray.push(data.value);
         })
         //console.log(valueArray);
         //console.log(offsetArray);
         animer();
     }

     function animer() {
         document.querySelectorAll(".piechart circle").forEach((pie, i) => {
             pie.style.strokeDasharray = valueArray[i] + " " + omkreds;
             pie.style.strokeDashoffset = -offsetArray[i];
             pie.setAttribute("data-value", valueArray[i]);
             // console.log(pie);
         });
         document.querySelector(".resultat").innerHTML = `<p>${46} % </p></div>`;
     }
     //        document.querySelector(".piechart").addEventListener("mouseover", e => {
     //            let valgt = e.target.getAttribute("data-value");
     //
     //            if (valgt) {
     //                console.log(valgt);
     //                document.querySelector(".resultat").innerHTML = `<div class><i>${46} % </i></div>`;
     //
     //            }
     //        });
