from django.contrib.auth.models import User, Group
from django.http import Http404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from .serializers import UserSerializer, GroupSerializer, ItemSerializer
from .redditApi import test
from modelBase.models import Item


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class TestView(APIView):
    def get(self, request, format=None):
        id = self.request.query_params.get('test')
        print("this is the param", id)
        x,y = test()
        item = Item.objects.all()
        serializer = ItemSerializer(item, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    

class TestDelete(APIView):
    def get_object(self, pk):
        try:
            return Item.objects.get(pk=pk)
        except Item.DoesNotExist:
            raise Http404

    def delete(self, request, idNum):
        test = self.request.query_params.get('test1')
        print("data")
        print(test)
        
        snippet = self.get_object(idNum)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
