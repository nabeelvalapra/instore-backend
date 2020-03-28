from rest_framework import viewsets, mixins

from store.serializers import StoreSerializer
from store.models import Store


class StoreViewSet(mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
