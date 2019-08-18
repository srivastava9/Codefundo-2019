from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User)
    State = models.CharField(max_length=120)
    District = models.CharField(max_length=120)
    Pincode = models.IntegerField(default=0)
    AadharNo = models.IntegerField(unique=True)

    def __str__(self):
        return self.user.username

