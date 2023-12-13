import pymongo
import socket

# Realizar conexao com o mongo
connecion_url="mongodb://labtl:27017/"
client=pymongo.MongoClient(connecion_url)

# Apontar banco e coluna
db = client['test']
collumn = db['hosts']

# Coletar informações sobre o host
hostname = socket.gethostname()
ipHost = socket.gethostbyname(socket.gethostname())


#validar se maquina ja esta no banco
queryIP = {"hostIP": ipHost}
ipVal = queryIP['hostIP']

if(ipHost == ipVal):
    #buscando host no banco
    buscar = collumn.find()
    for doc in buscar:
        print(type(doc))
    # atualizando host 
    queryHostname = {'hostname' : 'validar'}
    newHostname = {"$set": {'hostname': hostname}}
    collumn.update_one(queryHostname, newHostname)

    
    #print("Sucesso")
else:
    print("Não deu certo")





# adicionar o host ao banco

# Tratar as informações

# enviar para o host que esta no banco 







