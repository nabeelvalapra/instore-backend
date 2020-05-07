from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from store.viewsets import StoreViewSet, ProductViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
] + router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
