from rest_framework import serializers

from store.models import Store, Spotlight, Webdata


class WebdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webdata
        fields = ('logo', 'theme_color', 'accent_color')


class StoreSerializer(serializers.ModelSerializer):
    style = WebdataSerializer(source='webdata')

    class Meta:
        model = Store
        fields = ("email", "name", "style")


class SpotlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spotlight
        fields = ("image", )
