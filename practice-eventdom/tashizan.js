function greeting() {
  let a=document.querySelector('input[name="left"]');
  let ala=a.value;
  let n=Number(ala); 
  let b=document.querySelector('input[name="right"]');
  let blb=b.value;
  let nn =Number(blb);
  let AP=(n+nn);
  let anwer=document.querySelector('span[name="answer"]');
  answer.textContent=AP;
}
let x=document.querySelector('button#calc');
x.addEventListener('click',greeting);