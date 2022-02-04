from requests import post

url = 'http://localhost:8000/api/token/'
user_cred = {'username': 'cinema', 'password': 'admin000'}
response = post(url, data=user_cred)
resp_data = response.json()
print(resp_data)

{'refresh': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0MDUyNTE1MSwiaWF0IjoxNjQwNDM4NzUxLCJqdGkiOiI5NDRjNzY2MjIyMzk0MDU1YTZmM2U1MTI1OGVhMjllNCIsInVzZXJfaWQiOjExfQ.lcFNiBAd1WxX5kMWr4hL7-hIiLJHUgVI-VuClz7ZsNU',
 'access': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwNDM5MDUxLCJpYXQiOjE2NDA0Mzg3NTEsImp0aSI6ImM0Y2FjNjM5MjNjMDRiOGU4NTJlOGMwZDQ0ODQ2Yjk4IiwidXNlcl9pZCI6MTF9.Nu04FRspzvbrA0SwgEJaQRRw_QWDVcCjJMlVGBbqHq4'}
