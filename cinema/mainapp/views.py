from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Film, Schedule
from mainapp.serializers import FilmSerializer


class FilmList(ListView):
    model = Film


class ScheduleList(ListView):
    model = Schedule


class FilmViewSet(ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
