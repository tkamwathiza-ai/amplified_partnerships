from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

# --- MAKE SURE THIS IS PASTED AND SAVED BELOW ---
class Service(models.Model):
    title = models.CharField(max_length=200)
    icon_name = models.CharField(max_length=50) # Storing string names like 'activity'
    description = models.TextField()
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title