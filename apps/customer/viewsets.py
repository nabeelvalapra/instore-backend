import json
import urllib.request
import urllib.parse

from random import randint

from django.contrib.auth import get_user_model as InstoreUser
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from instore_user.models import OTPData

from customer.serializers import (
    RequestOTPSerializer, OTPSerializer
)
from customer.models import Customer

from store.models import Store


class RequestOTPAPIView(APIView):
    def post(self, *args, **kwargs):
        request_data = self.request.data
        serializer = RequestOTPSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        validated_mobile = serializer.data['mobile_no']
        try:
            user = InstoreUser().objects.get(
                mobile_no=validated_mobile, site=self.request.site
            )
        except ObjectDoesNotExist:
            user = InstoreUser().objects.create_user(
                mobile_no=validated_mobile, site=self.request.site
            )

        otp = randint(1000, 9999)
        response = self.send_otp(
            number=user.mobile_no, message="Your OTP is: {}".format(otp)
        )
        if not response['status'] == "success":
            return Response({
                "status": "failed",
                "message": "OTP sending failed. {}".format(response['status'])
            }, status=status.HTTP_400_BAD_REQUEST)

        OTPData.objects.create(user=user, otp=otp)

        return Response({
            "username": user.username,
            "status": "success",
            "message": "OTP succesfully sent."
        }, status=status.HTTP_200_OK)

    def send_otp(self, number, message):
        apikey = 'XfQk+vi8zFM-sBJQmW8qW79cPkcXVzohtdmDvRKZAW'
        sender = 'TXTLCL'
        data = urllib.parse.urlencode({
            'apikey': apikey,
            'numbers': number,
            'message': message,
            'sender': sender
        })
        data = data.encode('utf-8')
        request = urllib.request.Request("https://api.textlocal.in/send/?")
        f = urllib.request.urlopen(request, data)
        fr = f.read()
        return json.loads(fr)


class TokenAPIView(APIView):
    def post(self, *args, **kwargs):
        request_data = self.request.data
        serializer = OTPSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        user = InstoreUser().objects.get(username=serializer.data['username'])

        token, _ = Token.objects.get_or_create(user=user)
        customer, _ = Customer.objects.get_or_create(user=user, store=user.site.store)

        return Response({
            "token": token.key,
        }, status=status.HTTP_200_OK)
