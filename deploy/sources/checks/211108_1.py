from requests import post

url = 'http://localhost:8000/api-token-auth/'
user_cred = {'username': 'cinema', 'password': 'admin000'}
response = post(url, data=user_cred)
resp_data = response.json()
# print(dir(response))
print(resp_data)
