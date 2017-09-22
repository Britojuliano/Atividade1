//atividade lista de exercicio 1
//questao 13
//Juliano Fernandes Dias Taveira de Brito	
var pFabrica,pI,pL,vI,vL,vTotal
pFabrica = parseFloat(prompt('Escreva o preço de fabrica'))
pL   = parseFloat(prompt('Escreva o percetual de lucro'))/100 
pI   =  parseFloat(prompt('Escreva o percetual de imposto'))/100 

vTotal  = pFabrica + pFabrica*pL + pFabrica*pI
vI = pFabrica*pI
vP = pFabrica*pL


alert('O valor total é' + vTotal +'\n'+'O valor de imposto é' + vI + '\n' + 'O lucro é :' + vP)

