from rest_framework import viewsets, mixins

from store.serializers import StoreSerializer, ProductSerializer
from store.models import Store, Product


class StoreViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    def get_queryset(self):
        return self.queryset.filter(domain_name=self.request.site.domain)


class ProductViewSet(mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.queryset.filter(
            store__domain_name=self.request.site.domain
        )
