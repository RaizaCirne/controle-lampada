#Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
#O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
#Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado.

#Resolução em aula
casa = float(input('Valor da casa: RS$'))
salário = float(input('Salário do comprador: R$'))
anos = int(input('Quantos anos de financiamento? '))
prestação = casa / (anos * 12) # Preço da casa dividido por quantos meses ele vai pagar
mínimo = salário * 30 / 100
print('Para pagar uma casa de R${:.2f} em {} anos '.format(casa, anos), end='')
print('a prestação será de R${:.2f}'.format(prestação))
if prestação <= mínimo:
    print('Empréstimo pode ser CONCEDIDO!')
else:
    print('Empréstimo NEGADO!')
