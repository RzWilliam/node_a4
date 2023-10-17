import requests
import json

url = 'http://localhost:3000/pkm/652d076a056713188d5bcc3f'
payload = {'name': "pas Corentin", 'type': "pas nul", 'level': 50}
headers = {'content-type': 'application/json'}
r = requests.put(url, data=json.dumps(payload), headers=headers)
print(r.text)