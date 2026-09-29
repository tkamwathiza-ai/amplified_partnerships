from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=255)

    organization = models.CharField(
        max_length=255,
        blank=True
    )

    email = models.EmailField()

    phone = models.CharField(
        max_length=30,
        blank=True
    )

    service = models.CharField(
        max_length=255,
        blank=True
    )

    project_title = models.CharField(
        max_length=255,
        blank=True
    )

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"


class Service(models.Model):
    title = models.CharField(max_length=200)
    icon_name = models.CharField(max_length=50)
    description = models.TextField()
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title