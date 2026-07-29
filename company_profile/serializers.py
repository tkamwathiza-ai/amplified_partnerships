from rest_framework import serializers
from .models import ContactMessage, Service

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        # Include all the fields we want to accept from React
        fields = ['id', 'name', 'email', 'message', 'created_at']
        # Make the ID and date read-only so users can't forge them
        read_only_fields = ['id', 'created_at']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'icon_name', 'description', 'display_order', 'created_at']
        read_only_fields = ['id', 'created_at']