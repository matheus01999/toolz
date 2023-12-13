import pymongo

connecion_url="mongodb://labtl:27017/"

client=pymongo.MongoClient(connecion_url)

print(client.list_database_names())

