"""instore URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

from customer.viewsets import (
    RequestOTPAPIView, TokenAPIView
)


urlpatterns = [
    path('admin/', admin.site.urls),

    path('login-otp/', RequestOTPAPIView.as_view(), name='login_otp'),
    path('auth-token/', TokenAPIView.as_view(), name='auth_token'),

    path('', include('store.urls'), name="store"),
    path('products/', include('product.urls'), name="products"),
    path('customer', include('customer.urls'), name="customer"),
] + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + \
    static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
