from django.urls import path
from .views import verify_content, license_content

urlpatterns = [
    path('verify/', verify_content, name='verify'),
    path('license/', license_content, name='license')
]
