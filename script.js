
const t='Aspiring Cyber Security Analyst';
let i=0;
function type(){
 if(i<t.length){document.getElementById('typing').innerHTML+=t[i++];setTimeout(type,70);}
}
type();
