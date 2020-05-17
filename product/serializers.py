from rest_framework import serializers

from product.models import FashionProduct


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = FashionProduct
        fields = [
            "id", "name", "price", "slug", "caption", "size", "color",
            "tag", "availability", "image"
        ]
