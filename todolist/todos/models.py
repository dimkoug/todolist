from django.db import models

# Create your models here.

class Todo(models.Model):
    name = models.CharField(blank=True, max_length=100)

    class Meta:
        default_related_name = 'todos'
        verbose_name = 'todo'
        verbose_name_plural = 'todos'

    def __str__(self):
        return self.name
