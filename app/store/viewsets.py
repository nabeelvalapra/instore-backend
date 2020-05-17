from rest_framework import viewsets, mixins
from rest_framework.response import Response

from store.serializers import StoreSerializer, ProductSerializer, SpotlightSerializer
from store.models import Store, Product, Spotlight


class StoreViewSet(
    mixins.ListModelMixin, viewsets.GenericViewSet
):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    def list(self, request, *args, **kwargs):
        instance = self.queryset.get(id=self.request.store.id)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class SpotlightViewSet(
    mixins.ListModelMixin, viewsets.GenericViewSet
):
    queryset = Spotlight.objects.all()
    serializer_class = SpotlightSerializer

    def get_queryset(self):
        return self.queryset.filter(store=self.request.store).order_by('order')


class ProductViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return self.queryset.filter(store=self.request.store).order_by('order')
