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

# validar se o memso já esta acadastrado no banco
querryIp = {"hostIP" : ipHost}

mySearch = collumn.find(querryIp)
for ip in mySearch:
    ipVal = ip['hostIP']
    

    #validar status do host
    statusHost = ip['active'] #pegar o valor do status
    if(statusHost == False):
        #atualizar status do host
        queryStatus = {'active' : statusHost}
        queryUpdateStatus = {"$set" : {'active': True }}
        collumn.update_one(queryStatus, queryUpdateStatus)

        #Prencher demais informações
        queryHostname = {"hostname" : 'validar'}
        queryNewHostname = {"$set" : {"hostname" : hostname}}
        collumn.update_one(queryHostname, queryNewHostname)

    else:
        print("host ativo")
    
else:
    #caso não cadastrado realizar cadastro
    print("host não cadastrado")
    




















