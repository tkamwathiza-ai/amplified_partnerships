from django.contrib import admin
from .models import ContactMessage, Service  # 1. Make sure Service is imported here!

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    readonly_fields = ('name', 'email', 'message', 'created_at')

# 2. Make sure this exact block is written out and saved!
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon_name', 'display_order')
    list_editable = ('display_order',)