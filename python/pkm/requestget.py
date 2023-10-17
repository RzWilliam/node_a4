import requests

url = 'http://localhost:3000/pkm'
headers= {'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmQyYWMxNGQwMzQ3ZWM5YmQyNWQwZiIsIm1haWwiOiJ3aWxsaWFtQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ1OTgzMCwiZXhwIjoxNjk3NDgxNDMwfQ.-NpWfRMRXU59rhDtZ87ZLee4NINZv12n3tUcgj5o0fI'}

r = requests.get(url, headers=headers)
print(r.text)