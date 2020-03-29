from django.contrib.sites.shortcuts import get_current_site

from rest_framework import viewsets, mixins

from store.serializers import StoreSerializer
from store.models import Store


class StoreViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    def get_queryset(self):
        site = get_current_site(self.request)
        return self.queryset.filter(domain_name=site.domain)
