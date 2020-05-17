from rest_framework import routers

from store.viewsets import StoreViewSet, SpotlightViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)
router.register('spotlights', SpotlightViewSet)

urlpatterns = [
] + router.urls
