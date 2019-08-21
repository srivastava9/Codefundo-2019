from django.conf.urls import url
from home import views

urlpatterns = [
    url(r"^$", views.registered, name="home"),
    url(r"^register", views.registered, name="register"),
    url(r"^login", views.user_login, name="login"),
    url(r"^logout", views.user_logout, name="logout"),
    url(r"^user-demand", views.user_demand, name="User-demand"),
    url(r"^candidate-profile", views.profile_page_candiadate, name="Candidate-Profile"),
    url(r"^query", views.query_page, name="Query-Page"),
]

