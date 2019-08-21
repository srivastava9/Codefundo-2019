from django import forms
from django.contrib.auth.models import User
from home.models import UserProfile, userdemandcategory


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ("username", "password", "first_name")


class UserProfileForm(forms.ModelForm):
    typeUser = [("VOTER", "Voter"), ("CANDIDATE", "Candidate")]
    Usertype_choice = forms.ChoiceField(choices=typeUser, required=False)
    State = forms.CharField(
        label="State", widget=forms.TextInput(attrs={"placeholder": "Enter Your State"})
    )
    District = forms.CharField(
        label="District",
        widget=forms.TextInput(attrs={"placeholder": "Enter Your District"}),
    )
    Pincode = forms.IntegerField(
        widget=forms.NumberInput(
            attrs={"placeholder": "Enter Your 6 digit Pincode", "maxlength": "6"}
        )
    )
    AadharNo = forms.IntegerField(
        widget=forms.NumberInput(
            attrs={
                "placeholder": "Enter Your 12 digit Aadhar Card Number",
                "maxlength": "12",
            }
        )
    )

    class Meta:
        model = UserProfile
        fields = ("State", "District", "Pincode", "AadharNo")


class DemandcategoryForm(forms.ModelForm):
    demandcategory = forms.CharField(max_length=120)
    demandtext = forms.CharField(max_length=200)

    class Meta:
        model = userdemandcategory
        fields = ("demandcategory", "demandtext")

