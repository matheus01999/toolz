import pymongo
import socket

# Realizar conexao com o mongo
connecion_url="mongodb://labtl:27017/"
client=pymongo.MongoClient(connecion_url)

# Apontar banco e coluna
db = client['test']
collumn = db['services']


