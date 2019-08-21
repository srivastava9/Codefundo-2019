from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404
from django.contrib.auth import authenticate, login, logout
from home.forms import UserForm, UserProfileForm, DemandcategoryForm
from django.contrib.auth.decorators import login_required
from home.models import UserProfile, userdemandcategory

# Create your views here.
@login_required
def profile(request):
    userprofile = UserProfile.objects.get(user=request.user)
    return render(request, "home/demands.html", {"profile": userprofile})


def registered(request):
    registered = False
    if request.method == "POST":
        print(request.POST)
        print(request.FILES)
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileForm(data=request.POST)
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            profile.save()
            registered = True
            login(request, user)
            return redirect("/home/user-demand")

        else:
            # user_errors = user_form.errors
            # profile_errors = profile_form.errors
            print(user_form.errors, profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileForm()

    return render(
        request,
        "registration/registration_form.html",
        {
            "user_form": user_form,
            "profile_form": profile_form,
            "registered": registered,
        },
    )


def user_login(request):
    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                print(user)
                return redirect("/home")
            else:
                raise Http404(
                    "<strong>Your Account Has been Disabled.Please Register Again !</strong>"
                )
        else:
            print("invlaid login detail {0},{1}".format(username, password))
            return render(
                request, "registration/login.html", {"errors": "Invalid Login Details"}
            )
    else:
        return render(request, "registration/login.html", {})


@login_required
def user_logout(request):
    logout(request)
    return profile(request)


@login_required
def user_demand(request):
    userprofile = UserProfile.objects.get(user=request.user)
    if request.method == "POST":
        # print(request.POST.get("demandcategory"))

        category = userdemandcategory.objects.create(
            user=request.user,
            demandcategory=request.POST.get("demandcategory"),
            demandtext=request.POST.get("demandtext"),
        )

        return redirect("/home")
    else:
        categoryform = DemandcategoryForm()

    return render(
        request, "registration/voter_login_form.html", {"profile": userprofile}
    )


@login_required
def profile_page_candiadate(request):
    userprofile = UserProfile.objects.get(user=request.user)
    return render(request, "home/candidate_profile_page.html", {"profile": userprofile})


@login_required
def query_page(request):
    userprofile = UserProfile.objects.get(user=request.user)
    return render(request, "home/query_page.html", {"profile": userprofile})

