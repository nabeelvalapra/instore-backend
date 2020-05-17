from rest_framework import serializers

from store.models import Store, Spotlight, Webdata, Tag


class WebdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webdata
        fields = ('logo', 'theme_color', 'accent_color')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('slug', 'name', 'order')


class StoreSerializer(serializers.ModelSerializer):
    style = WebdataSerializer(source='webdata')
    tags = TagSerializer(many=True)

    class Meta:
        model = Store
        fields = ("email", "name", "style", "tags")


class SpotlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spotlight
        fields = ("image", )
