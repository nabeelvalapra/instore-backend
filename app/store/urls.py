from rest_framework import routers

from store.viewsets import StoreViewSet, SpotlightViewSet, ManifestViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)
router.register('manifest', ManifestViewSet)
router.register('spotlights', SpotlightViewSet)

urlpatterns = [
] + router.urls
