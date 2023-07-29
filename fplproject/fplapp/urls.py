from django.urls import path, include
from fplapp import views

urlpatterns = [
    path('',views.Fixtures,name='home')
]