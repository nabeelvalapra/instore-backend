import json
import urllib.request
import urllib.parse

from random import randint

from django.contrib.auth import get_user_model as InstoreUser

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
        temp_user = InstoreUser().objects.create_user(
            mobile_no=serializer.data['mobile_no']
        )

        otp = randint(1000, 9999)
        response = self.send_otp(
            number=temp_user.mobile_no,
            message="Your OTP is: {}".format(otp)
        )
        if not response['status'] == "success":
            temp_user.delete()
            return Response({
                "status": "failed",
                "message": "OTP sending failed. {}".format(response['status'])},
                status=status.HTTP_400_BAD_REQUEST)

        OTPData.objects.create(user=temp_user, otp=otp)

        return Response({
            "id": temp_user.username,
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
        user = InstoreUser().objects.get(username=serializer.data['id'])

        token, created = Token.objects.get_or_create(user=user)
        if created:
            store = Store.objects.get(domain_name=self.request.site.domain)
            Customer.objects.create(user=user, store=store)

        return Response({
            "token": token.key,
            "store": user.customer.store.domain_name,
            "first_name": user.customer.first_name,
            "address": user.customer.address
        }, status=status.HTTP_200_OK)
