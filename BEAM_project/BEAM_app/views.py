from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request,'base.html')

def firm(request):
    return render(request,'firm.html')

def about(request):
    return render(request,'about.html')

def terms_and_conditions(request):
    return render(request,'terms_and_conditions.html')

def log_in(request):
    return render(request,'log_in.html')

def sign_up(request):
    return render(request,'sign_up.html')

