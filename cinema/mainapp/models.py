from django.db import models
from authapp.models import UserProfile


class Film(models.Model):
    title = models.CharField(max_length=128, unique=True)
    description = models.TextField()
    # image = models.ImageField(upload_to='images/')
    audience = models.ManyToManyField('authapp.UserProfile', related_name='audience')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name_plural = 'Название'
        verbose_name = 'Названия'


class Schedule(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    date_time = models.DateTimeField()

    def __str__(self):
        return f'{self.film}: {self.date_time}'

    class Meta:
        verbose_name_plural = 'Расписание'
        verbose_name = 'Расписания'


class Seat(models.Model):
    seat_no = models.IntegerField()
    screening = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    available = models.BooleanField()
