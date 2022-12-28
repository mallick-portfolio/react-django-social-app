from rest_framework import serializers
from blog.models import Post
class PostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta:
        model = Post
        fields = "__all__"
        read_only_field = ['user']