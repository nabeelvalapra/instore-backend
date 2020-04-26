from django.contrib.auth import get_user_model as InstoreUser

from rest_framework.exceptions import ValidationError
from rest_framework import serializers

from base.validators import validate_mobile_no

from customer.models import Purchase


class RequestOTPSerializer(serializers.Serializer):
    mobile_no = serializers.CharField(
        validators=[validate_mobile_no]
    )


class OTPSerializer(serializers.Serializer):
    username = serializers.CharField()
    otp = serializers.CharField()

    def validate(self, validated_data):
        user = InstoreUser().objects.get(username=validated_data['username'])
        otp = user.onetimepassword_set.last()
        if otp.has_expired():
            raise ValidationError("OTP has expired")
        if not otp.password == int(validated_data["otp"]):
            raise ValidationError("Wrong OTP")
        return validated_data


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = '__all__'
