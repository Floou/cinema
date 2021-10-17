from rest_framework.serializers import ModelSerializer, StringRelatedField

from mainapp.models import Film, Schedule


class FilmSerializer(ModelSerializer):
    # user = StringRelatedField()

    class Meta:
        model = Film
        fields = '__all__'


class ScheduleSerializer(ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
