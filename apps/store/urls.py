from rest_framework import routers

from store.viewsets import StoreViewSet, ProductViewSet


router = routers.DefaultRouter()
router.register('', StoreViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
] + router.urls
