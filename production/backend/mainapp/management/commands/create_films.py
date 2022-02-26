from django.core.management.base import BaseCommand

from authapp.models import UserProfile
from mainapp.models import Film


class Command(BaseCommand):
    help = "Creates films"

    def handle(self, *args, **options):
        audience = UserProfile.objects.get(username='user1')
        Film.objects.create(title='film name',
                            description='description',
                            audience=audience,
                            )

        print('films created')
