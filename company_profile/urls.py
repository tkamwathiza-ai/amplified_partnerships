from django.urls import path
from .views import company_info

urlpatterns = [
    path('info/', company_info, name='company-info'),
]