from django.apps import AppConfig
import mongoengine

class BeamAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'BEAM_app'
    def ready(self):
      			  mongoengine.connect(
           				    db='Clusters', #DB name
       					    host='mongodb+srv://mohangummadi:FCMPAR5Qn0oh5OfE@cluster0.d5htkvg.mongodb.net/'
    					)
