from rest_framework import serializers

from base.validators import validate_mobile_no


class RequestOTPSerializer(serializers.Serializer):
    mobile_no = serializers.CharField(
        validators=[validate_mobile_no]
    )


class OTPSerializer(serializers.Serializer):
    temp_id = serializers.CharField()
    otp = serializers.CharField()