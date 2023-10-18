import requests

url = 'http://localhost:3000/pkm/652e4811e6e96ade6fffa4d9'
headers= {'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmY4YTQ0YmJkZTQ5OGI4MWI5MDRhZiIsIm1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY5NzYxNDQzMCwiZXhwIjoxNjk3NjM2MDMwfQ.GAoeasxpp1W2tBQ8jXyYB87P5t_mjEFIJYylMo3GXNM'}
r = requests.delete(url, headers=headers)
print(r.text)