from django.conf import settings

from rest_framework import serializers

from store.models import Store, Product


class StoreSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='site.name')
    logo = serializers.SerializerMethodField()

    class Meta:
        model = Store
        fields = ("email", "logo", "name", "background_color", "button_color")

    def get_logo(self, store):
        request = self.context.get('request')
        return request.build_absolute_uri(store.logo.url).\
            replace("http://", settings.REQUEST_SCHEME)


class ProductSerializer(serializers.ModelSerializer):
    product_images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id", "name", "price", "description", "slug",
            "tag", "availability", "product_images"
        ]

    def get_product_images(self, product):
        request = self.context.get('request')
        product_image = {}
        for item in product.product_images.all():
            product_image[item.order] = request.build_absolute_uri(item.image.url).\
                replace("http://", settings.REQUEST_SCHEME)
        return product_image
