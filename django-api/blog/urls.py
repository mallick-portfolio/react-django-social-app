from django.urls import path

from blog.views import PostViewSets

urlpatterns = [
    path('', PostViewSets.as_view(), name="post"),
]