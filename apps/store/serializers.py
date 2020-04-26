from rest_framework import serializers

from store.models import Store, Product


class StoreSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='site.name')

    class Meta:
        model = Store
        fields = ("email", "logo", "name")


class ProductSerializer(serializers.ModelSerializer):
    product_images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id", "name", "price", "description", "category",
            "tag", "availability", "product_images"
        ]

    def get_product_images(self, product):
        product_image = {}
        for item in product.product_images.values("order", "image"):
            product_image[item["order"]] = item["image"]
        return product_image
