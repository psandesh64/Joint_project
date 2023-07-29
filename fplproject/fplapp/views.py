from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
import json

base_url = "https://fantasy.premierleague.com/api/" 

# Create your views here.
def home_page(request):
    print('hello')
    return render(request, 'index.html')

def Fixtures(request):
    fixtures_url = base_url + "fixtures/"
    fixtures_response = requests.get(fixtures_url,verify = False).json()
    return JsonResponse(fixtures_response,safe=False)