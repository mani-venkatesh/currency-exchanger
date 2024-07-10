import currencyapicom
from pdb import set_trace

class User:
    def __init__(self, api_key):
        try:
            self.client = currencyapicom.Client(api_key)
        except:
            print("Something went wrong with the api_key")
        
    def convert(self, amount, cc1):
        latest = self.client.latest()
        conversion = latest['data'][cc1]['value'] * amount
        return f"{amount} USD is {conversion} {cc1}"

if __name__ == '__main__':
    api_key = 'cur_live_AjrVwKZ5fPfDcvN61H08hexspJGXwDhBljRhzRhg'
    user = User(api_key)
    output = user.convert(12,'RSD')
    print(output)