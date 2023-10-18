import requests
import json

url = 'http://localhost:3000/user/login'
payload = {'mail': "test@gmail.com", 'password': "test"}
headers = {'content-type': 'application/json'}
r = requests.post(url, data=json.dumps(payload), headers=headers)
print(r.text)