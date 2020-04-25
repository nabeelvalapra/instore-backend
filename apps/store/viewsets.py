from rest_framework import viewsets, mixins

from store.serializers import StoreSerializer, ProductSerializer
from store.models import Store, Product


class StoreViewSet(
    mixins.ListModelMixin, viewsets.GenericViewSet
):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    def get_queryset(self):
        return self.queryset.filter(site=self.request.site)


class ProductViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.queryset.filter(store__site=self.request.site)
