
from rest_framework import routers

from store.viewsets import StoreViewSet, ProductViewSet, SpotlightViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)
router.register('spotlights', SpotlightViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
] + router.urls
