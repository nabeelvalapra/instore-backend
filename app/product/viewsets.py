from rest_framework import mixins, viewsets

from product.models import FashionProduct
from product.serializers import ProductSerializer


class ProductViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = FashionProduct.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return self.queryset.filter(store=self.request.store).order_by('-order')
