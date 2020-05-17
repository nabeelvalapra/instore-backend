from django.contrib import admin

from product.models import FashionProduct


@admin.register(FashionProduct)
class ProductAdmin(admin.ModelAdmin):
    pass
