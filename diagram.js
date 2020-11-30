const promoterC = document.querySelector('.promoter-circle'); 
const promoterR = promoterC.r.baseVal.value;
const promoterCF = 2 * Math.PI * promoterR;
const promoterP = document.querySelector('.promoter-percent');

const skepticC = document.querySelector('.skeptic-circle'); 
const skepticR = skepticC.r.baseVal.value;
const skepticCF = 2 * Math.PI * skepticR;
const skepticP = document.querySelector('.skeptic-percent');


skepticC.style.strokeDasharray = `${skepticCF} ${skepticCF}`;
skepticC.style.strokeDashoffset = skepticCF;
skepticC.style.transformOrigin = `150px 180px`;
skepticC.style.transform = "rotate(-90deg)";


promoterC.style.strokeDasharray = `${promoterCF} ${promoterCF}`;
promoterC.style.strokeDashoffset = promoterCF;
promoterC.style.transformOrigin = "center";
promoterC.style.transform = `rotate(-90deg+${skepticP}deg)`;
promoterC.style.transition = "3s";

function setProgress(skeptic, promoter){
  const skepticOffset = skepticCF - skeptic / 100 * skepticCF;
  skepticC.style.strokeDashoffset = skepticOffset;

  const promoterOffset = promoterCF - promoter / 100 * promoterCF;
  promoterC.style.strokeDashoffset = promoterOffset;
};

let promoterV = parseInt(promoterP.textContent.slice(0,-1));
let skepticV = parseInt(skepticP.textContent.slice(0,-1));

setProgress(skepticV,promoterV);