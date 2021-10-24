from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Film, Schedule
from mainapp.serializers import FilmSerializer, ScheduleSerializer


class FilmList(ListView):
    model = Film


class ScheduleList(ListView):
    model = Schedule


class FilmViewSet(ModelViewSet):
    queryset = Film.objects.filter(is_active=True)
    serializer_class = FilmSerializer


class ScheduleViewSet(ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer


class UserViewSet:
    pass
