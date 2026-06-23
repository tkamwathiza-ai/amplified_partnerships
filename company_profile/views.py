from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def company_info(request):
    data = {
        "name": "Amplify Partnerships",
        "tagline": "Insight-Led Consulting for Resilient Institutions and Communities",
        "who_we_are": "Amplify Partnerships is a Malawi-based consulting firm that helps governments, development partners, faith-based organisations, and civil society design, deliver, and evaluate work that holds up under real-world conditions."
    }
    return Response(data)

# Create your views here.
