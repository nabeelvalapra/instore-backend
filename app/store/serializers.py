from rest_framework import serializers

from store.models import Store, Product, Spotlight


class StoreSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()

    class Meta:
        model = Store
        fields = ("email", "logo", "name", "background_color", "button_color")

    def get_logo(self, store):
        request = self.context.get('request')
        if not store.logo:
            return None
        return request.build_absolute_uri(store.logo.url)


class SpotlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spotlight
        fields = ("image", )


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = [
            "id", "name", "price", "slug", "caption", "size", "color",
            "tag", "availability", "image"
        ]
