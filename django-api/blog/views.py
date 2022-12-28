from rest_framework.views import APIView
from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class PostViewSets(APIView):
    def get(self, request, format= None):
        obj = Post.objects.all().order_by("-id")
        posts = PostSerializer(obj, many= True).data
        return Response({
            "status": "success",
            'message': "Post get successfully",
            'error': False,
            'data': posts
        })
    
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data )
        if serializer.is_valid():
            serializer.save()
            return Response({
            "status": "success",
            'message': "Post added successfully",
            'error': False,
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)

        return Response({
            "status": "success",
            'message': "Failed to add post",
            'error': serializer.errors,
            'data': False
        }, status=status.HTTP_400_BAD_REQUEST)