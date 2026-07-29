from django.urls import path
from .views import submit_contact_form, get_services

urlpatterns = [
    path('contact/', submit_contact_form, name='submit-contact'),
    path('services/', get_services, name='get-services'),
]