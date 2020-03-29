from rest_framework import routers

from store.viewsets import StoreViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)

urlpatterns = [
] + router.urls
