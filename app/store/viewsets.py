from rest_framework import viewsets, mixins
from rest_framework.response import Response

from store.serializers import StoreSerializer, SpotlightSerializer
from store.models import Store, Spotlight


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


class ManifestViewSet(viewsets.GenericViewSet):
    queryset = Store.objects.all()

    def list(self, request, *args, **kwargs):
        store = self.request.store
        manifest = {
            "short_name": store.name,
            "name": store.name,
            "icons": [
                {
                  "src": request.build_absolute_uri(store.webdata.logo.url),
                  "sizes": "64x64 32x32 24x24 16x16",
                  "type": "image/png"
                },
                {
                  "src": request.build_absolute_uri(store.webdata.logo.url),
                  "type": "image/png",
                  "sizes": "192x192"
                },
                {
                  "src": request.build_absolute_uri(store.webdata.logo.url),
                  "type": "image/png",
                  "sizes": "512x512"
                }
            ],
            "start_url": ".",
            "display": "standalone",
            "theme_color": store.webdata.theme_color,
            "background_color": store.webdata.theme_color
        }
        return Response(manifest)
