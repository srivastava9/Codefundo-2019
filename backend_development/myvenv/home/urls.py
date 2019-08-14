from django.conf.urls import url
from home import views

urlpatterns = [url(r"^$", views.login_page, name="login")]

