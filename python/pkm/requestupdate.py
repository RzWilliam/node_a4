import requests
import json

url = 'http://localhost:3000/pkm/652f8a6a10f0c33e811920fe'
payload = {'name': "Herbizarre", 'type': "Plante/Poison", 'level': 22}
headers = {'content-type': 'application/json'}
r = requests.put(url, data=json.dumps(payload), headers=headers)
print(r.text)