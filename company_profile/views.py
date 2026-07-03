from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer

@api_view(['POST'])
def submit_contact_form(request):
    # 1. Feed the incoming data into our serializer inspector
    serializer = ContactMessageSerializer(data=request.data)
    
    # 2. Check if the data matches all our validation criteria (Fixed name here!)
    if serializer.is_valid():
        serializer.save()  # Saves cleanly to your SQLite database file
        return Response(
            {"message": "Form submitted successfully!"}, 
            status=status.HTTP_201_CREATED
        )
    
    # 3. Yell back at React with explicit error states if validation breaks
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)