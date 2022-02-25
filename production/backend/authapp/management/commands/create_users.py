from django.core.management.base import BaseCommand
from authapp.models import UserProfile


class Command(BaseCommand):
    def handle(self, *args, **options):
        item = 0
        while item <= 9:
            UserProfile.objects.create_user(f'user{item + 1}', password='user000')
            item += 1
        UserProfile.objects.create_superuser('cinema', password='admin000')
        print('users created')
