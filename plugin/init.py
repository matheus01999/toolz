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

# validar se o memso já est acadastrado no banco
querryIp = {"hostIP" : ipHost}

mySearch = collumn.find(querryIp)
for ip in mySearch:
    ipVal = ip['hostIP']
    #se ja estiver cadastrado verificar status da validacao
    queryHostname = {"hostname" : 'validar'}
    queryNewHostname = {"$set" : {"hostname" : hostname}}
    collumn.update_one(queryHostname, queryNewHostname)
    break
else:
    #caso não cadastrado realizar cadastro
    queryHost = {"apelido" : hostname, "hostname" : hostname, "hostIP" : ipHost}
    insertHost = collumn.insert_one(queryHost)




















