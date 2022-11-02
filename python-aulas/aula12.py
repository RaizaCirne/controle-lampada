#Condição simples
nome = str(input('Qual é seu nome? '))
if nome == 'Gustavo':
    print('Que nome bonito!')
print('Tenha um bom dia, {}!'.format(nome))


#Condição composta
nome = str(input('Qual é seu nome? '))
if nome == 'Gustavo':
    print('Que nome bonito!')
else:
    print('Seu nome é bem normal.')
print('Tenha um bom dia, {}!'.format(nome))


#Condição aninhada - Estrutura condicional aninhada
nome = str(input('Qual é seu nome? '))
if nome == 'Gustavo':
    print('Que nome bonito!')
elif nome == 'Pedro' or nome == 'Maria' or nome == 'Paulo':
    print('Seu nome é bem popular no Brasil.')
else:
    print('Seu nome é bem normal.')
print('Tenha um bom dia, {}!'.format(nome))

#Outro exemplo
nome = str(input('Qual é seu nome? '))
if nome == 'Gustavo':
    print('Que nome bonito!')
elif nome == 'Pedro' or nome == 'Maria' or nome == 'Paulo':
    print('Seu nome é bem popular no Brasil.')
elif nome in 'Ana Cláudia Jéssica Juliana':
    print('Belo nome feminino')
else:
    print('Seu nome é bem normal.')
print('Tenha um bom dia, {}!'.format(nome))

# OBS:
# Podemos usar elif quantas vezes quisermos
# else é opcional


