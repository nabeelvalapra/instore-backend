from rest_framework import routers

from customer.viewsets import PurchaseViewSet


router = routers.DefaultRouter()
router.register('purchase', PurchaseViewSet, basename="purchase")

urlpatterns = [
] + router.urls
