from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator as maxLength

# Create your models here.
class UserProfile(models.Model):

    typeUser = [("VOTER", "Voter"), ("CANDIDATE", "Candidate")]
    Usertype = models.CharField(max_length=2, choices=typeUser, default="Voter")
    user = models.OneToOneField(User)
    State = models.CharField(max_length=120)
    District = models.CharField(max_length=120)
    Pincode = models.PositiveIntegerField(default=0, validators=[maxLength(999999)])
    AadharNo = models.PositiveIntegerField(
        unique=True,
        validators=[maxLength(999999999999)],
        error_messages={"unique": "A user with that AadharNo. already exists."},
    )

    def __str__(self):
        return self.user.username


class userdemandcategory(models.Model):
    user = models.ForeignKey(User)
    demandcategory = models.CharField(max_length=120, null=True, blank=True)
    demandtext = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.demandcategory


# class userdemandtext(models.Model):
#     demandtext = models.OneToOneField(userdemandcategory)

#     def __str__(self):
#         return self.demandtext[0:10]
