from django.contrib.auth import get_user_model as InstoreUser

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from customer.serializers import (
    RequestOTPSerializer, OTPSerializer
)
from customer.models import Customer

from store.models import Store


class RequestOTPAPIView(APIView):
    def post(self, *args, **kwargs):
        request_data = self.request.data
        serializer = RequestOTPSerializer(data=request_data)
        if serializer.is_valid():
            temp_user = InstoreUser().objects.create_user(
                mobile_no=serializer.data['mobile_no']
            )
            return Response({
                "temp_id": temp_user.username
            }, status=status.HTTP_206_PARTIAL_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TokenAPIView(APIView):
    def post(self, *args, **kwargs):
        request_data = self.request.data
        serializer = OTPSerializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        user = InstoreUser().objects.get(username=serializer.data['temp_id'])
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
