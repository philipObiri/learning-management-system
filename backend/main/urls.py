from django.urls import path
from . import views

urlpatterns = [
    # Fetch Detail of a single Teacher : 
    path("teachers/<int:pk>/", views.TeacherDetail.as_view(), name="teacher"),

    # Endpoint for retrieving a list of all teachers
    path("teachers/", views.TeacherList.as_view(), name="teachers"),
]
