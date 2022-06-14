from behave import step
from pageobjects.Page import Page
import time

@step('I am on home page')
def step_impl(context):
    url = context.url
    context.page.open(url)
    
    
@step('I click button 3 times')
def step_impl(context):
    context.page.click('//button[.="Button"]')
    time.sleep(2)
    context.page.click('//button[.="Button"]')
    time.sleep(2)
    context.page.click('//button[.="Button"]')
    time.sleep(3)
