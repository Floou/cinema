from django.db import models
from authapp.models import UserProfile


class Film(models.Model):
    title = models.CharField(max_length=128, unique=True)
    description = models.TextField()
    # image = models.ImageField(upload_to='')
    audience = models.ManyToManyField('authapp.UserProfile', related_name='audience')
    is_active = models.BooleanField(default=True, db_index=True)

    def __str__(self):
        return f'{self.title}'

    def delete(self, using=None, keep_parents=False):
        self.is_active = False
        self.title = f'_{self.title}'
        self.save()
        return 1, {}

    class Meta:
        verbose_name_plural = 'Название'
        verbose_name = 'Названия'


class Schedule(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    is_active = models.BooleanField(default=True, db_index=True)

    def __str__(self):
        return f'{self.film}: {self.date_time}'

    # def delete(self, using=None, keep_parents=False):
    #     self.is_active = False
    #     self.film = f'_{self.film}'
    #     self.save()
    #     return 1, {}

    class Meta:
        verbose_name_plural = 'Расписание'
        verbose_name = 'Расписания'


class Seat(models.Model):
    seat_no = models.IntegerField()
    screening = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    available = models.BooleanField()
