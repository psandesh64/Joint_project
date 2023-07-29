from django.urls import path, include
from fplapp import views

urlpatterns = [
    path('',views.home_page,name='home')
]