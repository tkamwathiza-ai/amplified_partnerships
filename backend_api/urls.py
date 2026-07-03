from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),                 # Calls Django's internal admin code
    path('api/', include('company_profile.urls')),   # Hands control off to your app file
]